import { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import Seo from '../components/Seo';

const GALLERY_IMAGES = {
  1: { src: '/gallery/gallery-01.webp', alt: 'AICTE IDEA Lab gallery photo 1' },
  2: { src: '/gallery/gallery-02.webp', alt: 'AICTE IDEA Lab gallery photo 2' },
};

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const closeButtonRef = useRef(null);
  const lastFocusedElementRef = useRef(null);

  const imageOrder = useMemo(() => Object.keys(GALLERY_IMAGES).map(Number), []);

  const getImageSrc = (num) => GALLERY_IMAGES[num]?.src;
  const getImageAlt = (num) => GALLERY_IMAGES[num]?.alt ?? 'AICTE IDEA Lab gallery photo';

  const handleImageClick = (num) => {
    lastFocusedElementRef.current = document.activeElement;
    setIsAnimating(true);
    setSelectedImage(num);
  };

  const handleTileKeyDown = (e, num) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleImageClick(num);
    }
  };

  const handleClose = useCallback(() => {
    setIsAnimating(false);
    setTimeout(() => {
      setSelectedImage(null);
      lastFocusedElementRef.current?.focus?.();
    }, 300);
  }, []);

  const handlePrevious = useCallback(() => {
    const currentIndex = imageOrder.indexOf(selectedImage);
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : imageOrder.length - 1;
    setSelectedImage(imageOrder[prevIndex]);
  }, [imageOrder, selectedImage]);

  const handleNext = useCallback(() => {
    const currentIndex = imageOrder.indexOf(selectedImage);
    const nextIndex = currentIndex < imageOrder.length - 1 ? currentIndex + 1 : 0;
    setSelectedImage(imageOrder[nextIndex]);
  }, [imageOrder, selectedImage]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!selectedImage) return;
      if (e.key === 'Escape') handleClose();
      if (e.key === 'ArrowLeft') handlePrevious();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedImage, handleClose, handlePrevious, handleNext]);

  // Lock background scroll and move focus into the dialog while it's open
  useEffect(() => {
    if (!selectedImage) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedImage]);

  return (
    <>
      <Seo
        title="Gallery"
        description="Photo gallery of the AICTE IDEA Lab at Kongunadu College of Engineering and Technology, Trichy."
        path="/gallery"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Gallery', path: '/gallery' }]}
      />

      {/* Page Header */}
      <header className="page-header"
        style={{backgroundImage: "linear-gradient(rgba(0,33,71,0.8), rgba(0,33,71,0.8)), url('/idealab.webp')"}}>
        <div className="container">
          <h1>Gallery</h1>
          <p className="breadcrumb">Home / Gallery</p>
        </div>
      </header>

      {/* Gallery Grid */}
      <section className="section">
        <div className="container">
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px'}}>
            {imageOrder.map((num) => (
              <div key={`gallery-${num}`} className="gallery-item"
                role="button"
                tabIndex={0}
                aria-label={`Open ${getImageAlt(num)} in full size`}
                style={{borderRadius: '12px', overflow: 'hidden', height: '280px', position: 'relative', cursor: 'pointer', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)'}}
                onClick={() => handleImageClick(num)}
                onKeyDown={(e) => handleTileKeyDown(e, num)}>
                <img src={getImageSrc(num)}
                  style={{width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)'}}
                  onMouseOver={(e) => e.currentTarget.style.transform='scale(1.15)'}
                  onMouseOut={(e) => e.currentTarget.style.transform='scale(1)'}
                  alt={getImageAlt(num)}
                  loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={getImageAlt(selectedImage)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            padding: '20px',
            cursor: 'pointer',
            animation: isAnimating ? 'fadeIn 0.3s ease-out' : 'fadeOut 0.3s ease-out',
            opacity: isAnimating ? 1 : 0
          }}
          onClick={handleClose}>
          <style>{`
            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            @keyframes fadeOut {
              from { opacity: 1; }
              to { opacity: 0; }
            }
            @keyframes scaleIn {
              from {
                opacity: 0;
                transform: scale(0.8);
              }
              to {
                opacity: 1;
                transform: scale(1);
              }
            }
            @keyframes scaleOut {
              from {
                opacity: 1;
                transform: scale(1);
              }
              to {
                opacity: 0;
                transform: scale(0.8);
              }
            }
          `}</style>

          <div style={{
            position: 'relative',
            maxWidth: '90vw',
            maxHeight: '90vh',
            aspectRatio: '4 / 3',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            animation: isAnimating ? 'scaleIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)' : 'scaleOut 0.3s ease-out'
          }}
          onClick={(e) => e.stopPropagation()}>
            <img
              src={getImageSrc(selectedImage)}
              alt={getImageAlt(selectedImage)}
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                objectFit: 'contain',
                borderRadius: '8px',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)'
              }} />
          </div>

          {/* Close Button — fixed to the viewport, not the image, so it can
              never be pushed off-screen by a tall image */}
          <button
            ref={closeButtonRef}
            onClick={(e) => { e.stopPropagation(); handleClose(); }}
            aria-label="Close image viewer"
            style={{
              position: 'fixed',
              top: '20px',
              right: '20px',
              background: 'rgba(255, 255, 255, 0.9)',
              border: 'none',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              fontSize: '24px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#333',
              fontWeight: 'bold',
              transition: 'all 0.3s ease',
              zIndex: 10001
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = 'white';
              e.currentTarget.style.transform = 'scale(1.1)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
              e.currentTarget.style.transform = 'scale(1)';
            }}>
            ×
          </button>

          {/* Previous Arrow */}
          <button
            onClick={(e) => { e.stopPropagation(); handlePrevious(); }}
            aria-label="Previous image"
            style={{
              position: 'fixed',
              left: '20px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(255, 255, 255, 0.9)',
              border: 'none',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              fontSize: '24px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#333',
              fontWeight: 'bold',
              transition: 'all 0.3s ease',
              zIndex: 10001
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = 'white';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
            }}>
            ‹
          </button>

          {/* Next Arrow */}
          <button
            onClick={(e) => { e.stopPropagation(); handleNext(); }}
            aria-label="Next image"
            style={{
              position: 'fixed',
              right: '20px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(255, 255, 255, 0.9)',
              border: 'none',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              fontSize: '24px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#333',
              fontWeight: 'bold',
              transition: 'all 0.3s ease',
              zIndex: 10001
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = 'white';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
            }}>
            ›
          </button>
        </div>
      )}
    </>
  );
}
