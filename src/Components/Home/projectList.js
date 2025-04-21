import Project from "../Projects/Project";
    
    // import styles from "./Projects.module.css";
    
    // import {
    //   CSharp,
    //   CSS,
    //   Express,
    //   GitHub,
    //   HTML5,
    //   Java,
    //   Javascript,
    //   MongoDb,
    //   MySQL,
    //   Nodejs,
    //   PHP,
    //   Python,
    //   React,
    //   Sass,
    // } from "../Technologies/TechIcons";
    
    import fijianAngels500px from '../../assets/images/fijianangels/fijianangels500px.png';
    import fijianAngels900px from '../../assets/images/fijianangels/fijianangels900px.png';
    import fijianAngelsDefault from "../../assets/images/fijianangels/fijianangels948px.png";
    
    import readReader500px from "../../assets/images/readreader/readreader500px.png";
    import readReader900px from "../../assets/images/readreader/readreader900px.png";
    import readReaderDefault from "../../assets/images/readreader/readreader1094px.png";
    
    import scootz550px from "../../assets/images/scootz/scootz500px.png";
    import scootz900px from "../../assets/images/scootz/scootz900px.png";
    import scootzDefault from "../../assets/images/scootz/scootz1250px.png";
    
    import brainstorm500px from "../../assets/images/brainstorm/brainstorm500px.png";
    import brainstorm900px from "../../assets/images/brainstorm/brainstorm900px.png";
    import brainstormDefault from "../../assets/images/brainstorm/brainstorm1250px.png";
    

const projects = [
  {
    Component: Project,
    props: {
      title: "Fijian Angels",
      description: "Used Figma to create design wireframe and implemented user-friendly UIs using React and Material-UI, improving site navigation and user interaction.Developed fully responsive website with CSS Grid and Flexbox, ensuring optimal display on various devices and screen sizes.Enhanced user interfaces by incorporating UI/UX best practices, including color theory, typography, and micro-interactions. Applied Material-UI components to create scalable, customizable design systems that were reusable across different sections of the application. Hosted using Heroku and connect to domain.",
      href: "https://www.fijianangels.com",
      github: "",
      srcList:
        [
          { media: "(max-width: 550px)", srcSet: fijianAngels500px },
          { media: "(max-width: 850px)", srcSet: fijianAngels900px },
        ],
      defaultSrc: { fijianAngelsDefault },
      alt: "Link to Fijian Angels Website",
      themeColor: "#ca4765e6"
    }
  },
  {
    Component: Project,
    props: {
      title: "Read Reader",
      description:"Created with elementary school children and their guardians in mind, this application provides guardians with the ability to track the children's daily reading. Each child has their own personal account within the guardian's account and is able to 'pay' for rewards based on the amount of time they have read. It is up the main user/ guardian to create possible prizes and to decide upon how much time in reading will be required to redeem each prize.",
      href: "https://read-reader.herokuapp.com/",
      github: "https://github.com/ast19004/ReadReader",
      github2: "https://github.com/ast19004/ReadReader-server",
      srcList: [
        { media: "(max-width: 500px)", srcSet: readReader500px },
        { media: "(max-width: 850px)", srcSet: readReader900px },
      ],
      defaultSrc: { readReaderDefault },
      alt: "Link to Read Reader Application",
      themeColor: "#49c5b6"
    }
  },
  {
    Component: Project,
    props: {
      title: "Scootz",
      description: "This fictitious Scooter Rental Website is built using the React library and demonstrates some playful use of CSS animations.",
      href: "https://ast19004.github.io/scootz/",
      github: "https://github.com/ast19004/scootz/tree/main",
      srcList: [
        { media: "(max-width: 550px)", srcSet: scootz550px },
        { media: "(max-width: 850px)", srcSet: scootz900px },
      ],
      defaultSrc: { scootzDefault },
      alt: "Link to Scootz Application",
      themeColor: "#ff8c00",
    }
  },
  {
    Component: Project,
    props: {
      title: "Brain Storm",
      description: "This application was created as my individual final for my Javascript class during the beginning of my Web Development journey.Using data in the trivia API found at 'https://opentdb.com/api_config.php', I created a trivia game that allows an individual to select a certain category, test their knowledge, and get their score at the end.Beyond its demonstration of Javascript skill, this application is another demonstration of playful animation and styling.",
      href: "https://alouisa.github.io/WDD330/week14/triviaGame/",
      github: "https://github.com/alouisa/alouisa.github.io/tree/master/WDD330/week14/triviaGame",
      srcList: [
          { media: "(max-width: 500px)", srcSet: brainstorm500px },
          { media: "(max-width: 850px)", srcSet: brainstorm900px },
      ],
      defaultSrc: { brainstormDefault },
      alt: "Link to Brain Storm Application",
      themeColor: "#bb3c93"
    }
  }
] 
    
  export default projects;
    