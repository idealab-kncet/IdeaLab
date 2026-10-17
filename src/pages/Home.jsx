import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';

function Home() {
  const [videoFailed, setVideoFailed] = useState(false);
  const [posterLoaded, setPosterLoaded] = useState(false);
  const [readyForVideo, setReadyForVideo] = useState(false);

  // Preload the hero background image so we can show a loading spinner
  // instead of a blank grey box while it's still fetching.
  useEffect(() => {
    const img = new Image();
    const markLoaded = () => setPosterLoaded(true);
    img.onload = markLoaded;
    img.onerror = markLoaded;
    img.src = `${import.meta.env.BASE_URL}images.jpg`;
    // If it was already cached, the load event may have fired before the
    // handlers above were attached — check on the next tick to be sure.
    const timer = setTimeout(() => {
      if (img.complete) markLoaded();
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  // Mount the <video> (and let it start fetching/decoding) only after the
  // first paint, not immediately on navigation. Attaching an autoplaying
  // video the instant this route mounts competes with the mobile nav
  // menu's closing animation for the same frame, making navigating to
  // Home from the nav feel like it "sticks" for a moment. A static poster
  // image renders instead until then, so the transition itself is cheap.
  useEffect(() => {
    let raf2;
    const raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => setReadyForVideo(true));
    });
    return () => {
      cancelAnimationFrame(raf1);
      if (raf2) cancelAnimationFrame(raf2);
    };
  }, []);

  return (
    <>
      <Seo
        title="AICTE IDEA Lab — Kongunadu College of Engineering and Technology, Trichy"
        description="AICTE IDEA Lab at Kongunadu College of Engineering and Technology, Trichy — a hub for innovation, prototyping, and interdisciplinary research turning student ideas into real-world solutions."
        path="/"
      />
      {/* Hero Section */}
      <header
        className="hero-section"
        style={{
          position: 'relative',
          overflow: 'hidden',
          minHeight: '100vh'
        }}
      >
        {/* Loading spinner shown until the hero background image is ready,
            instead of a blank grey box */}
        {!posterLoaded && (
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'var(--primary-color)',
              zIndex: 1,
            }}
          >
            <div className="hero-loading-spinner" aria-label="Loading"></div>
          </div>
        )}

        {/* Background Video (falls back to a static image if it fails to load,
            or hasn't started mounting yet — see readyForVideo above) */}
        {videoFailed || !readyForVideo ? (
          <img
            src={`${import.meta.env.BASE_URL}images.jpg`}
            alt=""
            className="hero-video"
            style={{ objectFit: 'cover', opacity: posterLoaded ? 1 : 0, transition: 'opacity 0.5s ease' }}
          />
        ) : (
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster={`${import.meta.env.BASE_URL}images.jpg`}
            className="hero-video"
            style={{ opacity: posterLoaded ? 1 : 0, transition: 'opacity 0.5s ease' }}
            onError={() => setVideoFailed(true)}
          >
            <source
              src="https://res.cloudinary.com/dkkaopb0s/video/upload/v1768147403/video_idxvmp.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        )}

        {/* Overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(rgba(0,33,71,0.5), rgba(0,33,71,0.5))',
            zIndex: 1
          }}
        ></div>

        {/* Content */}
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <h1 className="hero-title">
            <img src={`${import.meta.env.BASE_URL}Kongunadu.webp`} alt="Kongunadu" className="hero-logo" />
            <span>AICTE IDEA Lab</span>
          </h1>

          <h2 className="hero-subtitle">
            Idea Development, Evaluation & Application
          </h2>

          <p className="hero-description">
            Transforming Ideas into Real-World Solutions. A hub for innovation,
            prototyping, and interdisciplinary research.
          </p>

          <div className="hero-buttons">
            <Link to="/activities" className="btn btn-secondary">
              View Activities
            </Link>
          </div>
        </div>
      </header>

      {/* Intro Section */}
      <section className="section">
        <div className="container">
          <div className="text-content-block">
            <h2 className="section-title">Welcome to Innovation</h2>
            <p>
              The AICTE IDEA Lab is a major initiative to encourage students for
              application of science, technology, engineering, and mathematics
              (STEM) fundamentals towards enhanced hands-on experience, learning
              by doing, and product visualisation. As a common facility, the lab
              serves as a driving force for innovation in the region.
            </p>

            <div className="card-grid home-features">
              <div className="card feature-card">
                <i className="fa-solid fa-brain feature-icon"></i>
                <h3>Ideate</h3>
                <p>Brainstorm creative solutions for real-world problems.</p>
              </div>

              <div className="card feature-card">
                <i className="fa-solid fa-cogs feature-icon" style={{ color: 'var(--secondary-color)' }}></i>
                <h3>Develop</h3>
                <p>Build functional prototypes using advanced tools.</p>
              </div>

              <div className="card feature-card">
                <i className="fa-solid fa-rocket feature-icon"></i>
                <h3>Launch</h3>
                <p>Evaluate success and prepare for market-ready products.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
