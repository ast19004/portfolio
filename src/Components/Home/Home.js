import styles from "./Home.module.css";
import { Box } from "@mui/material";
import ProjectCarousel from "../UI/Carousel/ProjectCarousel";
import projectList from "./projectList";


const Home = () => {

  return (
    <Box className={styles.home}>
      <ProjectCarousel projects={projectList} intervalValue={10000}/>
    </Box>
  );
};

export default Home;
