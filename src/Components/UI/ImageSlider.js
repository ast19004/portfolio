import React, { useEffect, useState } from 'react';

const ImageSlider = ({ interval = 3000, images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [interval, images]);

  const currentImage = images[currentIndex];

  return (
    <div className="slider-container">
      <picture>
              {currentImage.lg &&
                  <source media={`(min-width: ${currentImage.lg.minwidth})`} srcSet={currentImage.lg} />
              }
              {currentImage.md &&
                  <source media={`(min-width: ${currentImage.md.minwidth})`} srcSet={currentImage.md} />
              }
        <img
          src={currentImage.sm} // Fallback for small screens
          alt={currentImage.alt}
          className="slider-image"
        />
      </picture>
    </div>
  );
};

export default ImageSlider;
