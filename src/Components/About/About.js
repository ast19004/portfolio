import { Box, Typography, List, ListItem} from "@mui/material";

import AnnaImg from '../../assets/images/annaastle.png';
import oneYear from '../../assets/images/about/oneYear.png';
import styles from './About.module.css';

const About = (props) => {
  return (
    <Box>
      <Box className={styles.main_container}>
        <Box className={styles.main_container_child}>
        <Typography variant="h5" fontWeight="medium" gutterBottom>
          🛠️ What I Bring
        </Typography>
        <List sx={{ listStyleType: 'disc', pl: 3 }}>
          <ListItem sx={{ display: 'list-item' }}>Frontend & backend development skills</ListItem>
          <ListItem sx={{ display: 'list-item' }}>Eye for clean, responsive UI</ListItem>
          <ListItem sx={{ display: 'list-item' }}>Experience launching live apps</ListItem>
          <ListItem sx={{ display: 'list-item' }}>Passion for purposeful work</ListItem>
        </List>
      </Box>

      <Box className={styles.main_container_child}>
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
      </Box>

      <Box className={styles.main_container_child}>
        <Typography variant="h5" fontWeight="medium" gutterBottom>
          🌟 Why I Do This
        </Typography>
        <Typography variant="body1" paragraph>
          I’m happiest when I’m building things that <strong>make a difference</strong> — whether
          it’s improving a user’s experience, supporting a community, or solving a meaningful problem.
        </Typography>
        <Typography variant="body1">Let’s make something great together. 🙌</Typography>
      </Box>
    </Box>
      <Box className={ styles.experience_container}><img src={ oneYear} alt="1 year real world experience"/></Box> 
      <Box className={ styles.headshot_container}>
        <img src={AnnaImg} alt="Anna Astle" className={ styles.headshot} />
        </Box>

    </Box>
  );
};

export default About;
