import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

import styles from "./Home.module.css";
import { Box } from "@mui/material";
import ScrollDownIcon from "@mui/icons-material/South";

import Hamburger from "hamburger-react";

import prjImages from './prjImages'
import ImageSlider from "../UI/Slider/ImageSlider/ImageSlider";
import Contact from "../Contact/Contact";
import ProjectCarousel from "../UI/Carousel/ProjectCarousel";
import projectList from "./projectList";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [inViewStyle, setInViewStyle] = useState("");
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      setInViewStyle("moveDownFadeOut");
    }
    return () => setInViewStyle("");
  }, [inView]);

  return (
    // TODO: // Change over to end before face, orange to white, text match, pull pink, non all caps titles
    <Box ref={ref} className={styles.home}>

      <Hamburger
        toggled={menuOpen}
        toggle={setMenuOpen}
        color="whitesmoke"
        sx={{ display: 'block', position: 'absolute', top: '2%', left: '2%'}}
      />
        <Box component="h1" className={`${styles.home_name}`} sx={{
          color: 'whitesmoke',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.2rem',
          textAlign: 'right',
        }}>
          <Box
            component="span"
          sx={{
            letterSpacing: '2rem',
            filter: 'drop-shadow(6px 6px 4px black)'
          }}
          >
            Anna
          </Box>
          <Box
            component="span"
          sx={{
              alignSelf: 'flex-end',
              display: 'inline-block',
              writingMode: 'vertical-lr',
              textOrientation: 'upright',
              letterSpacing: '-1rem',
              marginRight: '1.5rem',
              filter: 'drop-shadow(6px 6px 4px black)'
            }}>stle</Box>
      </Box>

      {/* <ImageSlider
        className={styles.home_img}
        images={prjImages}
        interval={6000}
      />  */}
      <ProjectCarousel projects={projectList} />
      
      {/* TODO: Move Contact to bottom right on portrait */}
      <Contact sx={{ position: 'absolute', bottom: 0}} />
      {/* <Box sx={{
        position: 'relative', top: '0%',
      }}>
        <Box sx={{position: 'absolute', bottom: '2%',right: '4%', display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-end'}}>
          <Box sx={{ width: '82vh', height: '0.1rem', backgroundColor: 'whitesmoke', borderRadius: '5px' }} /> 
          <Box sx={{ width: '85vh', height: '0.2rem', backgroundColor: 'whitesmoke', borderRadius: '5px' }} /> 
          <Box sx={{ width: '88vh', height: '0.3rem', backgroundColor: 'whitesmoke', borderRadius: '5px' }} />
        </Box>
      </Box> */}
  
    </Box>
  );
};

export default Home;
