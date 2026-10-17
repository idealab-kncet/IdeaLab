// Post-build static prerendering.
//
// Vite's client-only build ships an empty <div id="root"></div> — crawlers
// that don't execute JavaScript (Bing, LinkedIn, WhatsApp, most AI answer
// engines) see nothing. This script serves the built app, visits each route
// with a real browser, waits for React to render, and writes the resulting
// HTML back into dist/<route>/index.html. Firebase Hosting serves a matching
// static file before falling back to the SPA rewrite, so each route now
// ships real content on the very first response — the client bundle then
// takes over exactly as before once it loads.
import { spawn, exec } from 'node:child_process';
import { copyFile, mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer';

// `npx vite preview` spawns a child process tree (cmd.exe -> npx -> node);
// preview.kill() only kills the immediate shell, leaving vite's server
// running and the script hanging. Kill the whole tree.
function killProcessTree(pid) {
  if (!pid) return;
  if (process.platform === 'win32') {
    exec(`taskkill /pid ${pid} /T /F`);
  } else {
    try { process.kill(-pid, 'SIGKILL'); } catch { /* already gone */ }
  }
}

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, '..');
const distDir = join(rootDir, 'dist');
const port = 4321;
const segment = (process.env.VITE_BASE || '').replace(/^\/+|\/+$/g, '');
const basePath = segment ? `/${segment}` : '';
const baseUrl = `http://localhost:${port}`;

// '/' is rendered LAST: vite preview's static file server serves dist/index.html
// as the SPA fallback for every not-yet-prerendered route. Writing Home's fully
// baked HTML there first would make every later route boot from a shell whose
// title/meta are already static text — Helmet would then add its own tags
// alongside them instead of replacing them, producing duplicates. Rendering
// Home last means every other route still falls back to the pristine build
// output (no baked tags to collide with) while it's being read.
const ROUTES = [
  '/about',
  '/vision',
  '/services',
  '/team',
  '/gallery',
  '/activities',
  '/facilities',
  '/contact',
  '/',
];

function waitForServer(url, attempts = 60) {
  return new Promise((resolve, reject) => {
    const tryOnce = (remaining) => {
      fetch(url)
        .then(() => resolve())
        .catch((err) => {
          if (remaining <= 0) return reject(err);
          setTimeout(() => tryOnce(remaining - 1), 500);
        });
    };
    tryOnce(attempts);
  });
}

async function main() {
  const preview = spawn(
    'npx',
    ['vite', 'preview', '--port', String(port), '--strictPort'],
    { cwd: rootDir, stdio: 'pipe', shell: true }
  );

  let previewError = '';
  preview.stderr.on('data', (chunk) => { previewError += chunk.toString(); });

  try {
    console.log('Waiting for preview server...');
    await waitForServer(`${baseUrl}${basePath}/`);
    console.log('Preview server is up.');

    console.log('Launching browser...');
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
    console.log('Browser launched.');
    try {
      for (const route of ROUTES) {
        console.log(`Rendering ${route}...`);
        const page = await browser.newPage();
        await page.goto(`${baseUrl}${basePath}${route}`, { waitUntil: 'networkidle0', timeout: 30000 });
        // Give React a moment past networkidle for any late state updates.
        await new Promise((r) => setTimeout(r, 300));
        const html = await page.content();
        await page.close();

        const outPath =
          route === '/'
            ? join(distDir, 'index.html')
            : join(distDir, route.slice(1), 'index.html');
        await mkdir(dirname(outPath), { recursive: true });
        await writeFile(outPath, html, 'utf-8');
        if (route === '/') await copyFile(outPath, join(distDir, '404.html'));
        console.log(`Prerendered ${route} -> ${outPath.replace(rootDir + '\\', '').replace(rootDir + '/', '')}`);
      }
    } finally {
      await browser.close();
    }
  } catch (err) {
    console.error('Prerender failed:', err.message);
    if (previewError) console.error(previewError);
    process.exitCode = 1;
  } finally {
    killProcessTree(preview.pid);
  }
}

main().then(() => process.exit(process.exitCode || 0));
