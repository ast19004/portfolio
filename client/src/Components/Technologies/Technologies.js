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

const Technologies = () => {
  return (
    <ul className={styles.iconList}>
      <HTML5 />
      <CSS />
      <Sass />
      <Javascript />
      <React />
      <Nodejs />
      <Express />
      <MongoDb />
      <GitHub />
      <MySQL />
      <PHP />
      <CSharp />
      <Java />
      <Python />
    </ul>
  );
};

export default Technologies;
