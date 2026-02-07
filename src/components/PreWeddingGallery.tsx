import { useState, useEffect, useRef } from 'react';
import './PreWeddingGallery.css';

interface GalleryImage {
  src: string;
  category: 'traditional' | 'bike';
}

// Traditional photos
const traditionalPhotos: GalleryImage[] = Array.from({ length: 27 }, (_, i) => ({
  src: `/images/prewedding/traditional/img (${i + 1}).jpeg`,
  category: 'traditional'
}));

// Bike photos
const bikePhotos: GalleryImage[] = Array.from({ length: 10 }, (_, i) => ({
  src: `/images/prewedding/bikephotos/img (${i + 1}).jpeg`,
  category: 'bike'
}));

const allPhotos = [...traditionalPhotos, ...bikePhotos];

const PreWeddingGallery = () => {
  const [filter, setFilter] = useState<'all' | 'traditional' | 'bike'>('all');
  const [visibleImages, setVisibleImages] = useState<Set<number>>(new Set());
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  const filteredPhotos = filter === 'all' 
    ? allPhotos 
    : allPhotos.filter(photo => photo.category === filter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setVisibleImages((prev) => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.1 }
    );

    imageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [filteredPhotos]);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredPhotos.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + filteredPhotos.length) % filteredPhotos.length);
    }
  };

  return (
    <div className="prewedding-container">
      <div className="prewedding-header">
        <div className="prewedding-icon">💑</div>
        <h2 className="prewedding-title">Our Pre-Wedding Memories</h2>
        <p className="prewedding-subtitle">Capturing the moments before forever begins</p>
      </div>

      <div className="filter-buttons">
        <button 
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          All Photos ({allPhotos.length})
        </button>
        <button 
          className={`filter-btn ${filter === 'traditional' ? 'active' : ''}`}
          onClick={() => setFilter('traditional')}
        >
          Traditional ({traditionalPhotos.length})
        </button>
        <button 
          className={`filter-btn ${filter === 'bike' ? 'active' : ''}`}
          onClick={() => setFilter('bike')}
        >
          Bike Adventure ({bikePhotos.length})
        </button>
      </div>

      <div className="prewedding-gallery">
        {filteredPhotos.map((photo, index) => (
          <div
            key={`${photo.category}-${index}`}
            ref={(el) => { imageRefs.current[index] = el; }}
            data-index={index}
            className={`prewedding-card ${visibleImages.has(index) ? 'visible' : ''}`}
            onClick={() => openLightbox(index)}
          >
            <div className="prewedding-image-wrapper">
              <img 
                src={photo.src} 
                alt={`Pre-wedding ${photo.category} photo ${index + 1}`}
                className="prewedding-image"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
              <div className="prewedding-overlay">
                <span className="view-icon">🔍</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedImage !== null && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>✕</button>
          <button className="lightbox-prev" onClick={(e) => { e.stopPropagation(); prevImage(); }}>‹</button>
          <button className="lightbox-next" onClick={(e) => { e.stopPropagation(); nextImage(); }}>›</button>
          
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img 
              src={filteredPhotos[selectedImage].src} 
              alt={`Pre-wedding photo ${selectedImage + 1}`}
              className="lightbox-image"
            />
            <div className="lightbox-info">
              <p className="lightbox-counter">
                {selectedImage + 1} / {filteredPhotos.length}
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="prewedding-footer">
        <p className="prewedding-message">
          Every photo tells a story of our love, our laughter, and our journey together 💕
        </p>
      </div>
    </div>
  );
};

export default PreWeddingGallery;
