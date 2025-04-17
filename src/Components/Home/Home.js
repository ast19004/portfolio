import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

import styles from "./Home.module.css";
import { Box } from "@mui/material";
import ScrollDownIcon from "@mui/icons-material/South";

import Hamburger from "hamburger-react";

import readReader550px from "../../assets/images/readreader/readreader-550px.jpg";
import readReader850px from "../../assets/images/readreader/readreader-850px.jpg";
import readReaderDefault from "../../assets/images/readreader/readreader.jpg";

import fijianangels500px from '../../assets/images/fijianangels/Tender Moment between a Young Female Nurse in Scrubs with a Stethoscope and an Elderly Woman - Edited.png';
import scootz from '../../assets/images/scootz/c19827ab-6021-4809-a5a1-00fa3fce681c.png';


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
      <Box sx={{
        position: 'absolute',
        bottom: '0vh',
        alignSelf: 'flex-end',
        justifySelf:'center',
        borderRadius: '10px',
      }}>
        {/* <ProjectThumbnail
          href="https://read-reader.herokuapp.com/"
          srcList={[
            { media: "(max-width: 550px)", srcSet: readReader550px },
            { media: "(max-width: 850px)", srcSet: readReader850px },
          ]}
          defaultSrc={readReaderDefault}
        /> */}
        <img
          src={scootz}
          alt="Fijian Angels"
          style={{
            display: "block",
            maxWidth: '100%',
            height: '100vh',
            filter: 'grayscale(1)'
          }}
        />
      </Box>
      <Box sx={{position: 'fixed', top: '2%', left: '2%'}}>
        <Hamburger toggled={menuOpen} toggle={setMenuOpen} />
      </Box>
        <Box component="h1" className={`${styles.home_name}`} sx={{
          color: 'whitesmoke',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.2rem',
          textAlign: 'right',
          paddingRight: '2%'
        }}>
          <Box
            component="span"
          sx={{
            letterSpacing: '2rem',
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
              marginRight: '1.5rem'
            }}>stle</Box>
        </Box>
      <Box sx={{
        position: 'relative', top: '0%',
        // transform: 'rotate(-90deg)'
      }}>
        <Box sx={{position: 'absolute', bottom: '2%',right: '4%', display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-end'}}>
          <Box sx={{ width: '82vh', height: '0.1rem', backgroundColor: 'whitesmoke', borderRadius: '5px' }} /> 
          <Box sx={{ width: '85vh', height: '0.2rem', backgroundColor: 'whitesmoke', borderRadius: '5px' }} /> 
          <Box sx={{ width: '88vh', height: '0.3rem', backgroundColor: 'whitesmoke', borderRadius: '5px' }} />
        </Box>
      </Box>
      {/* <Box sx={{ position: 'absolute', top: '8%', left: '1%', display: 'flex', flexDirection: 'column-reverse', gap: '1.8rem', padding: '0 1.5%' }}>
        <Box sx={{ height: '1.5rem', width: '1.5rem', background: 'white', borderRadius: '50%' }} />
        <Box sx={{ height: '1.5rem', width: '1.5rem', background: 'white', borderRadius: '50%' }} />
        <Box sx={{ height: '1.5rem', width: '1.5rem', background: 'white', borderRadius: '50%' }} />
        <Box sx={{ height: '1.5rem', width: '1.5rem', background: 'white', borderRadius: '50%' }} />
        <Box sx={{ height: '1.4rem', width: '1.4rem', background: 'white', borderRadius: '50%' }} />
        <Box sx={{ height: '1.4rem', width: '1.4rem', background: 'white', borderRadius: '50%' }} />
        <Box sx={{ height: '1.3rem', width: '1.3rem', background: 'white', borderRadius: '50%' }} />
        <Box sx={{ height: '1.3rem', width: '1.3rem', background: 'white', borderRadius: '50%' }} />
        <Box sx={{ height: '1.2rem', width: '1.2rem', background: 'white', borderRadius: '50%' }} />
        <Box sx={{ height: '1.2rem', width: '1.2rem', background: 'white', borderRadius: '50%' }} />
        <Box sx={{ height: '1.1rem', width: '1.1rem', background: 'white', borderRadius: '50%' }} />
        <Box sx={{ height: '1.1rem', width: '1.1rem', background: 'white', borderRadius: '50%' }} />
        <Box sx={{ height: '1rem', width: '1rem', background: 'white', borderRadius: '50%' }} />
      </Box> */}
  
      {/* <Box
        className={inViewStyle}
        component="span"
        sx={{ opacity: 0, position: "absolute", top: "85%", left: "1%" }}
      >
        <ScrollDownIcon fontSize="large" sx={{ color: "#0c77ff" }} />
      </Box> */}
      {/* <Box className={styles.shapes_container}>
        <Box className={styles.shapes_container__left} >
          <About className={styles.homebox_about} />
        </Box>
        <Box className={styles.shapes_container__right}/>
      </Box> */}
      {/* <Box className={ styles.designer_image} /> */}
      {/* <Technologies className={styles.homebox_tech} /> */}
    </Box>
  );
};

export default Home;
