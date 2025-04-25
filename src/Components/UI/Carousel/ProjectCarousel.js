import React, { useState, useEffect } from 'react';
import { Box, Button, IconButton, Stack } from '@mui/material';
import { AnimatePresence, motion, transform } from 'framer-motion';


import styles from './ProjectCarousel.module.css';

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const ProjectCarousel = ({ projects, intervalValue = 4000}) => {
  const [[index, direction], setIndex] = useState([0, 0]);

  const paginate = (newIndex) => {
  setIndex([newIndex, newIndex > index ? 1 : -1]);
};

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => paginate(1), intervalValue);
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
        {/* Pagination dots */}
      <Stack direction="row" spacing={1} className={ styles.bullet_list}>
        {projects.map((_, i) => (
          <IconButton
            key={i}
            onClick={() => paginate(i)}
            size="small"
            sx={{
              width: 12,
              height: 12,
              borderRadius: '50%',
              backgroundColor: i === index ? props.themeColor : 'grey.400',
              '&:hover': {
                backgroundColor: i === index ? props.themeColor : 'grey.500',
              },
              p: 0,
            }}
          />
        ))}
      </Stack>
    </div>
  );
};

export default ProjectCarousel;
