import { Box } from "@mui/material";
import Contact from "../../Contact/Contact";
import oneYear from '../../../assets/images/about/oneYear.png';

import styles from './Footer.module.css';

const Footer = (props) => { 
    return (
      <footer className={ styles.footer}>
        <Box className={ styles.contact_container}>
          <span>
          WEB DEVELOPER
            </span>
          <Contact className="contact" />
          </Box>
        <Box className={ styles.experience_container}><img src={ oneYear} alt="1 year real world experience"/></Box> 
      </footer>)
};

export default Footer;