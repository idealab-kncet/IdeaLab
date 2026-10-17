import { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import Seo from '../components/Seo';

const TOTAL_FACILITY_PHOTOS = 35;

export default function Facilities() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const closeButtonRef = useRef(null);
  const lastFocusedElementRef = useRef(null);

  // Create ordered array of all image numbers
  const imageOrder = useMemo(
    () => [21, ...Array.from({ length: 14 }, (_, i) => i + 23), ...Array.from({ length: 20 }, (_, i) => i + 1)],
    []
  );

  const getFacilityAlt = (num) =>
    `AICTE IDEA Lab workspace — photo ${imageOrder.indexOf(num) + 1} of ${TOTAL_FACILITY_PHOTOS}`;

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
        title="Facilities"
        description="Photo gallery of the workspace, equipment, and infrastructure at the AICTE IDEA Lab, Kongunadu College of Engineering and Technology, Trichy."
        path="/facilities"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Facilities', path: '/facilities' }]}
      />

      {/* Page Header */}
      <header className="page-header"
        style={{backgroundImage: `linear-gradient(rgba(0,33,71,0.8), rgba(0,33,71,0.8)), url('${import.meta.env.BASE_URL}idealab.webp')`}}>
        <div className="container">
          <h1>Facilities</h1>
          <p className="breadcrumb">Home / Facilities</p>
        </div>
      </header>

      {/* Gallery Grid */}
      <section className="section">
        <div className="container">
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px'}}>
            {/* Facility-21 image first */}
            <div className="gallery-item"
              role="button"
              tabIndex={0}
              aria-label={`Open ${getFacilityAlt(21)} in full size`}
              style={{borderRadius: '12px', overflow: 'hidden', height: '280px', position: 'relative', cursor: 'pointer', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)'}}
              onClick={() => handleImageClick(21)}
              onKeyDown={(e) => handleTileKeyDown(e, 21)}>
              <img src={`${import.meta.env.BASE_URL}facilities/facility-21.webp`}
                style={{width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)'}}
                onMouseOver={(e) => e.currentTarget.style.transform='scale(1.15)'}
                onMouseOut={(e) => e.currentTarget.style.transform='scale(1)'}
                alt={getFacilityAlt(21)}
                loading="lazy" />
            </div>

            {/* Images 23-36 (skipping 22) */}
            {Array.from({ length: 14 }, (_, i) => i + 23).map((num) => (
              <div key={`facility-${num}`} className="gallery-item"
                role="button"
                tabIndex={0}
                aria-label={`Open ${getFacilityAlt(num)} in full size`}
                style={{borderRadius: '12px', overflow: 'hidden', height: '280px', position: 'relative', cursor: 'pointer', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)'}}
                onClick={() => handleImageClick(num)}
                onKeyDown={(e) => handleTileKeyDown(e, num)}>
                <img src={`${import.meta.env.BASE_URL}facilities/facility-${String(num).padStart(2, '0')}.webp`}
                  style={{width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)'}}
                  onMouseOver={(e) => e.currentTarget.style.transform='scale(1.15)'}
                  onMouseOut={(e) => e.currentTarget.style.transform='scale(1)'}
                  alt={getFacilityAlt(num)}
                  loading="lazy" />
              </div>
            ))}

            {/* Existing images (1-20) */}
            {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
              <div key={`facility-${num}`} className="gallery-item"
                role="button"
                tabIndex={0}
                aria-label={`Open ${getFacilityAlt(num)} in full size`}
                style={{borderRadius: '12px', overflow: 'hidden', height: '280px', position: 'relative', cursor: 'pointer', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)'}}
                onClick={() => handleImageClick(num)}
                onKeyDown={(e) => handleTileKeyDown(e, num)}>
                <img src={`${import.meta.env.BASE_URL}facilities/facility-${String(num).padStart(2, '0')}.webp`}
                  style={{width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)'}}
                  onMouseOver={(e) => e.currentTarget.style.transform='scale(1.15)'}
                  onMouseOut={(e) => e.currentTarget.style.transform='scale(1)'}
                  alt={getFacilityAlt(num)}
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
          aria-label={getFacilityAlt(selectedImage)}
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
              src={`${import.meta.env.BASE_URL}facilities/facility-${String(selectedImage).padStart(2, '0')}.webp`}
              alt={getFacilityAlt(selectedImage)}
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
