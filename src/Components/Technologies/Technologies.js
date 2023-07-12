import styles from "./Techonolgies.module.css";
import {
  HTML5,
  CSS,
  Sass,
  Javascript,
  React,
  Nodejs,
  Express,
  MongoDb,
  GitHub,
  MySQL,
  PHP,
  CSharp,
  Java,
  Python,
} from "./TechIcons";
import { Box } from "@mui/system";

const Technologies = (props) => {
  return (
    <Box sx={props.sx}>
      <ul className={styles.iconList}>
        <li></li>
        <HTML5 />
        <CSS />
        <Javascript />
        <React />
        <GitHub />
        <Sass />
        <Nodejs />
        <Express />
        <MongoDb />
        <MySQL />
        <PHP />
        <CSharp />
        <Java />
        <Python />
      </ul>

      <Box sx={{ position: "relative" }} className={styles.expertise}>
        <Box></Box>
      </Box>
    </Box>
  );
};

export default Technologies;
