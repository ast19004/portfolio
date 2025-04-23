import { Box, Typography, List, ListItem} from "@mui/material";
import styles from "./About.module.css";

import AnnaImg from '../../assets/images/annaastle.png';
import oneYear from '../../assets/images/about/oneYear.png';

const About = (props) => {
  return (
    <Box>
      <Box sx={{ margin: '2%',maxWidth: 800, mx: 'auto', p: 4, color: 'whitesmoke',}}>
      <Box sx={{ mt: 4, background: 'rgba(50,50,50,0.5)',  padding: '5%', borderRadius: '50%'}}>
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

      <Box sx={{ mt: 4, background: 'rgba(100,100,100,0.18)',  padding: '5%', borderRadius: '50%'}}>
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

      <Box sx={{ mt: 4, background: 'rgba(100,100,100,0.18)', padding: '5%', borderRadius: '50%'}}>
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
      {/* <Typography>Hey there! I’m a web developer with over a year of hands-on experience building full-stack applications using React, Node.js, and MongoDB. I love bringing ideas to life — from wireframing in Figma to coding both the front and back ends of web projects. I've even built and launched websites from the ground up.

Outside of tech, I’m a mom of two, a proud ball python caretaker, and a dedicated volunteer at my children’s school (including a stint running their Squarespace site and coordinating the “Rolling Dropoff” crew). I also log about 40 miles a week on my bike trainer — it’s how I reset and recharge.

I’m always looking for opportunities where I can contribute meaningful work and make an impact. Let’s build something great together!</Typography> */}
      <Box sx={{position: 'fixed', bottom: '4%', right: '2%', width:'7rem',  backgroundColor: "rgba(0,0,0,1)",
  borderRadius: '1rem'} }><img src={ oneYear} alt="1 year real world experience"/></Box> 
      <Box sx={{
        position: 'absolute',
        right: '0',
        bottom: '2%',
      }}>
        <img src={AnnaImg} alt="Anna Astle" style={{
          opacity: '0.5',
          backgroundColor: 'rgba(255,255,255,0.1)',
          borderRadius: '50%',
        }} />
        </Box>

    </Box>
  );
};

export default About;
