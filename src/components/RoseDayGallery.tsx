import { useState, useEffect, useRef } from 'react';
import './RoseDayGallery.css';

interface RoseImage {
  src: string;
  caption: string;
  date?: string;
}

// Add your flower images here
const roseImages: RoseImage[] = [
  {
    src: '/images/flowers/flower1.jpeg',
    caption: 'The first roses I gave you',
    date: 'Rose Day 2024'
  },
  {
    src: '/images/flowers/flower2.jpeg',
    caption: 'Every petal holds a memory',
    date: 'February 7, 2024'
  },
  {
    src: '/images/flowers/flower3.jpeg',
    caption: 'Beautiful flowers for my beautiful love',
    date: ''
  },
  {
    src: '/images/flowers/flower4.jpeg',
    caption: 'Each rose represents my love for you',
    date: ''
  },
  {
    src: '/images/flowers/flower5.jpeg',
    caption: 'Blooming with love',
    date: ''
  },
  {
    src: '/images/flowers/flower6.jpeg',
    caption: 'A bouquet of memories',
    date: ''
  },
  {
    src: '/images/flowers/flower7.jpeg',
    caption: 'Forever in bloom',
    date: ''
  },
  {
    src: '/images/flowers/flower8.jpeg',
    caption: 'Roses as beautiful as you',
    date: ''
  },
  {
    src: '/images/flowers/flower9.jpeg',
    caption: 'Every flower tells our story',
    date: ''
  },
  {
    src: '/images/flowers/flower10.jpeg',
    caption: 'My love for you grows like these flowers',
    date: ''
  },
];

const RoseDayGallery = () => {
  const [visibleImages, setVisibleImages] = useState<Set<number>>(new Set());
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

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
      { threshold: 0.2 }
    );

    imageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % roseImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + roseImages.length) % roseImages.length);
    }
  };

  return (
    <div className="rose-gallery-container">
      <div className="rose-header">
        <div className="rose-icon">🌹</div>
        <h2 className="rose-title">Rose Day Memories</h2>
        <p className="rose-subtitle">Every flower I gave you, every moment we shared</p>
      </div>

      <div className="rose-gallery">
        {roseImages.map((image, index) => (
          <div
            key={index}
            ref={(el) => { imageRefs.current[index] = el; }}
            data-index={index}
            className={`rose-card ${visibleImages.has(index) ? 'visible' : ''}`}
            onClick={() => openLightbox(index)}
          >
            <div className="rose-image-wrapper">
              <img 
                src={image.src} 
                alt={image.caption} 
                className="rose-image"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
              <div className="rose-overlay">
                <span className="view-icon">🔍</span>
              </div>
            </div>
            <p className="rose-caption">{image.caption}</p>
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
              src={roseImages[selectedImage].src} 
              alt={roseImages[selectedImage].caption} 
              className="lightbox-image"
            />
            <div className="lightbox-info">
              <p className="lightbox-caption">{roseImages[selectedImage].caption}</p>
            </div>
          </div>
        </div>
      )}

      <div className="rose-footer">
        <p className="rose-message">
          Just like these roses, my love for you blooms more beautiful each day 🌹💕
        </p>
      </div>
    </div>
  );
};

export default RoseDayGallery;
