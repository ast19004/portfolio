import { Box, Typography, List, ListItem} from "@mui/material";
import { AnimatePresence, motion, transform } from 'framer-motion';


import AnnaImg from '../../assets/images/annaastle.png';
import styles from './About.module.css';
import { useEffect, useState } from "react";

const main_container_children = [
  <Box className={styles.main_container_child} key="1">
        <Typography variant="h5" fontWeight="medium" gutterBottom>
          🛠️ What I Bring
        </Typography>
        <List sx={{ listStyleType: 'disc', pl: 3 }}>
          <ListItem sx={{ display: 'list-item' }}>Frontend & backend development skills</ListItem>
          <ListItem sx={{ display: 'list-item' }}>Eye for clean, responsive UI</ListItem>
          <ListItem sx={{ display: 'list-item' }}>Experience launching live apps</ListItem>
          <ListItem sx={{ display: 'list-item' }}>Passion for purposeful work</ListItem>
        </List>
      </Box>,

      <Box className={styles.main_container_child} key="2">
        <Typography variant="h5" fontWeight="medium" gutterBottom>
          🐍 When I'm Not Coding
        </Typography>
        <List sx={{ listStyleType: 'disc', pl: 3 }}>
          <ListItem sx={{ display: 'list-item' }}>🐍 Caring for my two ball pythons</ListItem>
          <ListItem sx={{ display: 'list-item' }}>🚴 Biking 40+ miles a week on my indoor trainer</ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            🧒 Volunteering at my kids' school:
            <List sx={{ listStyleType: 'circle', pl: 4 }}>
              <ListItem sx={{ display: 'list-item' }}>Managed their <strong>Squarespace</strong> website</ListItem>
              <ListItem sx={{ display: 'list-item' }}>Coordinated the PTA’s <strong>Rolling Dropoff</strong></ListItem>
              <ListItem sx={{ display: 'list-item' }}>Room parent in both of their classes</ListItem>
            </List>
          </ListItem>
        </List>
      </Box>,

      <Box className={styles.main_container_child} key="3">
        <Typography variant="h5" fontWeight="medium" gutterBottom>
          🌟 Why I Do This
        </Typography>
        <Typography variant="body1" paragraph>
          I’m happiest when I’m building things that <strong>make a difference</strong> — whether
          it’s improving a user’s experience, supporting a community, or solving a meaningful problem.
        </Typography>
        <Typography variant="body1">Let’s make something great together. 🙌</Typography>
      </Box>
];

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const About = ({ intervalValue=15000}) => {

 const [[index, direction], setIndex] = useState([0, 0]);
 
   const paginate = (newDirection) => {
     setIndex(([prevIndex]) => {
       const newIndex = (prevIndex + newDirection + main_container_children.length) % main_container_children.length;
       return [newIndex, newDirection];
     });
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

  return (
    <Box>
      {/* TODO: make a slide of these items for mobile view */}
      <Box className={styles.main_container}>
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
            {main_container_children[index]}
             </motion.div>
          </AnimatePresence>
      </Box>
      <Box className={ styles.headshot_container}>
        <img src={AnnaImg} alt="Anna Astle" className={ styles.headshot} />
        </Box>

    </Box>
  );
};

export default About;
