import Project from "./Project";

import styles from "./Projects.module.css";

import {
  CSharp,
  CSS,
  Express,
  GitHub,
  HTML5,
  Java,
  Javascript,
  MongoDb,
  MySQL,
  Nodejs,
  PHP,
  Python,
  React,
  Sass,
} from "../Technologies/TechIcons";

import readerReaderImg from "../../assets/images/readreader.jpg";
import scootzImg from "../../assets/images/scootz.jpg";
import brainstormImg from "../../assets/images/brainstorm.jpg";
import emergenceUniversityImg from "../../assets/images/emergenceUniversity.jpg";

const Projects = () => {
  return (
    <div className={styles.projects}>
      <Project
        title="Read Reader"
        description="Created with elementary school children and their guardians in mind, this application provides guardians with the ability to track the children's daily reading. Each child has their own personal account within the guardian's account and is able to 'pay' for rewards based on the amount of time they have read. It is up the main user/ guardian to create possible prizes and to decide upon how much time in reading will be required to redeem each prize."
        href="https://read-reader.herokuapp.com/"
        src={readerReaderImg}
        alt="Link to Read Reader Application"
      >
        <Javascript />
        <React />
        <CSS />
        <Express />
        <Nodejs />
        <MongoDb />
      </Project>

      <Project
        title="Scootz"
        description="This ficticious Scooter Rental Website is built using the React library and demonstrates some playful use of CSS animations."
        href="https://ast19004.github.io/scootz/"
        src={scootzImg}
        alt="Link to Scootz Application"
      >
        <Javascript />
        <React />
        <CSS />
      </Project>
      {/* 
      <Project
        title="Brain Storm"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id venenatis a condimentum vitae. Enim sit amet venenatis urna cursus. Etiam erat velit scelerisque in dictum non consectetur a erat. Arcu bibendum at varius vel pharetra vel turpis nunc. Risus sed vulputate odio ut enim. Sed libero enim sed faucibus turpis in. Sollicitudin ac orci phasellus egestas tellus rutrum tellus. Nunc id cursus metus aliquam. Elementum nibh tellus molestie nunc non."
        url="https://www.google.com"
        src={brainstormImg}
        alt="Link to Brain Storm Application"
      >
        <HTML5 />
        <Javascript />
        <CSS />
      </Project>
      <Project
        title="Emergence University"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id venenatis a condimentum vitae. Enim sit amet venenatis urna cursus. Etiam erat velit scelerisque in dictum non consectetur a erat. Arcu bibendum at varius vel pharetra vel turpis nunc. Risus sed vulputate odio ut enim. Sed libero enim sed faucibus turpis in. Sollicitudin ac orci phasellus egestas tellus rutrum tellus. Nunc id cursus metus aliquam. Elementum nibh tellus molestie nunc non."
        url="https://www.google.com"
        src={emergenceUniversityImg}
        alt="Link to Emergence University Application"
      >
        <HTML5 />
        <CSharp />
        <CSS />
      </Project> */}
    </div>
  );
};

export default Projects;
