import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.jsx'

// prettier-ignore
if (typeof window !== 'undefined') {
  window[atob('X19jcmVkaXRz')] = () =>
    console.log(atob('QWljdGUgSWRlYSBMYWIgd2Vic2l0ZQpCdWlsdCBieTogQWtoaWwgUiAmIFJhdmljaGFuZHJhbiBQIOKAlCBGaW5hbCBZZWFyIENTRSAoQmF0Y2ggMjAyMy0yMDI3KQ=='));
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>,
)
