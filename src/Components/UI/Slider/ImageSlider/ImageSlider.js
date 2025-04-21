import React, { useEffect, useState } from 'react';

import styles from './ImageSlide.module.css';

const ImageSlider = ({ interval = 3000, images, sx, className }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [interval, images]);

  const currentImage = images[currentIndex];

  return (
    <div className={`${styles["slider-container"]} ${className}`} sx={ sx }>
      <picture>
              {currentImage.lg.src && currentImage.lg.minwidth &&
                  <source media={`(min-width: ${currentImage.lg.minwidth})`} srcSet={currentImage.lg.src} />
              }
              {currentImage.md.src && currentImage.md.minwidth &&
                  <source media={`(min-width: ${currentImage.md.minwidth})`} srcSet={currentImage.md.src} />
              }
        <img
          className={`${styles["slider-image"]} ${className}`}
          src={currentImage.sm.src} // Fallback for small screens
          alt={currentImage.alt}
        />
      </picture>
    </div>
  );
};

export default ImageSlider;
