import { Helmet } from 'react-helmet-async';

const SITE_NAME = 'AICTE IDEA Lab';
const SITE_TAGLINE = 'Kongunadu College of Engineering and Technology, Trichy';
const BASE_URL = 'https://idealab.kongunadu.ac.in';

/**
 * Per-route SEO: unique title, meta description, canonical, Open Graph /
 * Twitter overrides, and an optional BreadcrumbList JSON-LD block.
 *
 * `path` is the route path (e.g. "/about") used to build the canonical URL.
 * `breadcrumbs` is an ordered array of { name, path } from Home down to the
 * current page; omit it on the homepage.
 */
export default function Seo({ title, description, path = '/', breadcrumbs }) {
  const fullTitle = path === '/' ? title : `${title} | ${SITE_NAME}, ${SITE_TAGLINE}`;
  const url = `${BASE_URL}${path}`;

  const breadcrumbSchema = breadcrumbs && {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: `${BASE_URL}${crumb.path}`,
    })),
  };

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {breadcrumbSchema && (
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      )}
    </Helmet>
  );
}
