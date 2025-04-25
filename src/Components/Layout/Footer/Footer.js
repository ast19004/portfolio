import { Box } from "@mui/material";

import { useLocation } from 'react-router-dom';

import Contact from "../../Contact/Contact";
import oneYear from '../../../assets/images/about/oneYear.png';

import styles from './Footer.module.css';
import { useEffect, useState } from "react";

const Footer = (props) => {
  const location = useLocation();
  const path = location.pathname;

  const [hide, setHide] = useState(true);

  useEffect(() => {
    if (path === "/about" && hide) { setHide(false) }
    else if (!hide) { 
      setHide(true);
    }
  }, [path]);  
    return (
      <footer className={ styles.footer}>
        <Box className={ styles.contact_container}>
          <span>
          WEB DEVELOPER
            </span>
          <Contact className="contact" />
          </Box>
        {!hide && <Box className={styles.experience_container}><img src={oneYear} alt="1 year real world experience" /></Box>} 
      </footer>)
};

export default Footer;