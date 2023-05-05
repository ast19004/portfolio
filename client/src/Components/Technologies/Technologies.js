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

import EastIcon from "@mui/icons-material/East";

const Technologies = (props) => {
  return (
    <Box sx={props.sx}>
      <p
        style={{
          textAlign: "left",
          margin: "0 100px 0 100px",
          display: "flex",
          alignItems: "center",
        }}
      >
        Knows (proficient&nbsp;
        <EastIcon fontSize="small" />
        &nbsp;experienced)...
      </p>
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
    </Box>
  );
};

export default Technologies;
