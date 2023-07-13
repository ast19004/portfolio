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
        title="READ READER"
        description="Created with elementary school children and their guardians in mind, this application provides guardians with the ability to track the children's daily reading. Each child has their own personal account within the guardian's account and is able to 'pay' for rewards based on the amount of time they have read. It is up the main user/ guardian to create possible prizes and to decide upon how much time in reading will be required to redeem each prize."
        href="https://read-reader.herokuapp.com/"
        github="https://github.com/ast19004/ReadReader"
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
        title="SCOOTZ"
        description="This fictitious Scooter Rental Website is built using the React library and demonstrates some playful use of CSS animations."
        href="https://ast19004.github.io/scootz/"
        github="https://github.com/ast19004/scootz/tree/main"
        src={scootzImg}
        alt="Link to Scootz Application"
      >
        <Javascript />
        <React />
        <CSS />
      </Project>

      <Project
        title="BRAIN STORM"
        description="
        This application was created as my individual final for my Javascript class during the beginning of my Web Development journey. Using data in the trivia API found at 'https://opentdb.com/api_config.php', I created a trivia game that allows an individual to select a certain category, test their knowledge, and get their score at the end. Beyond its demonstration of Javascript skill, this application is another demonstration of playful animation and styling."
        href="https://alouisa.github.io/WDD330/week14/triviaGame/"
        github="https://github.com/alouisa/alouisa.github.io/tree/master/WDD330/week14/triviaGame"
        src={brainstormImg}
        alt="Link to Brain Storm Application"
      >
        <HTML5 />
        <Javascript />
        <CSS />
      </Project>
      {/* 
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
