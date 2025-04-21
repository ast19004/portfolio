import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';


const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const ProjectCarousel = ({ projects}) => {
  const [[index, direction], setIndex] = useState([0, 0]);

  const paginate = (newDirection) => {
    setIndex(([prevIndex]) => {
      const newIndex = (prevIndex + newDirection + projects.length) % projects.length;
      return [newIndex, newDirection];
    });
  };

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => paginate(1), 4000);
    return () => clearInterval(interval);
  }, []);

  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0,
    }),
  };
  const { Component, props } = projects[index]; 

  return (
    <div className="">
      <div className="">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.6 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.3}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);
              if (swipe < -swipeConfidenceThreshold) {
                paginate(1); // swipe left
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1); // swipe right
              }
            }}
            className=""
          >
            <Component {...props} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Optional navigation buttons */}
      <div className="">
        <button onClick={() => paginate(-1)} className="px-4 py-2 bg-gray-200 rounded">
          Prev
        </button>
        <button onClick={() => paginate(1)} className="px-4 py-2 bg-gray-200 rounded">
          Next
        </button>
      </div>
    </div>
  );
};

export default ProjectCarousel;
