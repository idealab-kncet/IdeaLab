import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | AICTE IDEA Lab</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <section className="section" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1>404 — Page Not Found</h1>
          <p style={{ marginBottom: '24px' }}>
            The page you're looking for doesn't exist or has moved.
          </p>
          <Link to="/" className="btn btn-secondary">
            Back to Home
          </Link>
        </div>
      </section>
    </>
  );
}
