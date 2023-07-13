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

      <Box className={styles.expertise}>
        <Box>
          <Box
            sx={{
              height: "2px",
              backgroundColor: "#BEBABA",
              marginLeft: "-3px",
              width: "182px",
              "@media(min-width: 860px)": { width: "217px" },
            }}
          />
          <Box
            component="span"
            sx={{
              display: "block",
              marginLeft: "-3px",
              marginTop: "-1px",
              fontSize: "0.6rem",
              color: "#8b8989",
              "@media(min-width: 860px)": { fontSize: "0.7rem" },
            }}
          >
            Proficient
          </Box>
        </Box>
        <Box>
          <Box
            sx={{
              height: "2px",
              backgroundColor: "#BEBABA",
              width: "98px",
              "@media(min-width: 860px)": { fontSize: "0.7rem" },
            }}
          />
          <Box
            component="span"
            sx={{
              display: "block",
              marginTop: "-1px",
              fontSize: "0.6rem",
              color: "#8b8989",
              "@media(min-width: 860px)": { fontSize: "0.7rem" },
            }}
          >
            Experienced
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Technologies;
