import styles from "./Techonolgies.module.css";
import {
  CSharp,
  Express,
  GitHub,
  HTML5,
  Java,
  Javascript,
  MongoDb,
  MySQL,
  PHP,
  Python,
  React,
  Sass,
} from "./TechIcons";

const Technologies = () => {
  return (
    <ul className={styles.iconList}>
      <CSharp />
      <Express />
      <GitHub />
      <HTML5 />
      <Java />
      <Javascript />
      <MongoDb />
      <MySQL />
      <PHP />
      <Python />
      <React />
      <Sass />
    </ul>
  );
};

export default Technologies;
