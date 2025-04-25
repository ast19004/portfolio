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
    <Box className={`${styles.expertise} ${props.className}`}>
      <Box>
        <ul className={styles.expertise_list}>
          <HTML5 className={styles.expertise_list_item} />
          <CSS className={styles.expertise_list_item} />
          <Javascript className={styles.expertise_list_item} />
          <React className={styles.expertise_list_item} />
          <GitHub className={styles.expertise_list_item} />
          <Sass className={styles.expertise_list_item} />
          <Nodejs className={styles.expertise_list_item} />
          <Express className={styles.expertise_list_item} />
          <MongoDb className={styles.expertise_list_item} />
        </ul>
        <Box>
          <Box
            sx={{
              height: "0.1rem",
              backgroundColor: "#BEBABA",
              marginLeft: "-0.2rem",
              width: "100",
            }}
          />
          <Box
            component="span"
            sx={{
              display: "block",

              marginTop: "-0.06rem",
              marginLeft: "-0.4rem",
              // fontSize: "0.6rem",
              color: "#8b8989",
              "@media(min-width: 53.7rem)": { fontSize: "1rem" },
            }}
          >
            Proficient
          </Box>
        </Box>
      </Box>

      <Box>
        <ul className={styles.expertise_list}>
          <MySQL className={styles.expertise_list_item} />
          <PHP className={styles.expertise_list_item} />
          <CSharp className={styles.expertise_list_item} />
          <Java className={styles.expertise_list_item} />
          <Python className={styles.expertise_list_item} />
        </ul>

        <Box>
          <Box
            sx={{
              height: "0.1rem",
              backgroundColor: "#BEBABA",
              width: "100%",
              marginLeft: "-0.2rem",
            }}
          />
          <Box
            component="span"
            sx={{
              display: "block",
              marginTop: "-0.06rem",
              marginLeft: "-0.3rem",
              // fontSize: "0.6rem",
              color: "#8b8989",
              "@media(min-width: 53.7rem)": { fontSize: "1rem" },
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
