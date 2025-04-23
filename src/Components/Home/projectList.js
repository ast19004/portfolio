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
   
    
const paragraphStyle = { fontSize: '1rem', opacity: '0.8' };
const spanStyle = {fontSize: '1rem',};

const projects = [
  {
    Component: Project,
    props: {
      title: "Fijian Angels",
      description: <><p style={{ ...paragraphStyle, padding: '0.5rem 0' }}>Growing Home Healthcare company, Fijian Angels, is broading their online presence. This is their first website.</p><p>TEAM: <span style={ spanStyle}>Myself (Web Developer), the CEO, the COO and the company's Media Manager</span></p><p>WIREFRAME: <span style={ spanStyle}>Figma</span></p><p>TECH: <span style={ spanStyle}>React, MaterialUI, CSS, Node.js, MongoDB, Mongoose, EmailJS, Firebase, & Heroku</span></p></>,
      href: "https://www.fijianangels.com",
      github: "",
      srcList:
        [
          { media: "(max-width: 550px)", srcSet: fijianAngels500px },
          { media: "(max-width: 850px)", srcSet: fijianAngels900px },
        ],
      defaultSrc: fijianAngelsDefault,
      alt: "Link to Fijian Angels Website",
      themeColor: "#ca4765e6"
    }
  },
  {
    Component: Project,
    props: {
      title: "Read Reader",
      description:<><p style={{ ...paragraphStyle, padding: '0.5rem 0' }}>Read Reader, a personal project, is a reward-based reading tracker for children.<br/>Children are able to 'pay' for guardian set rewards based on the amount of time they have read.</p><p>TEAM: <span style={ spanStyle}>Myself (Web Developer) & my mentor Taylor Parcel (Web Developer @ UCBerkeley)</span></p><p>WIREFRAME: <span style={ spanStyle}>draw.io via Google Drive</span></p><p>TECH: <span style={ spanStyle}>React, MaterialUI, CSS, Node.js, MongoDB, Mongoose, & Heroku</span></p></>,
      href: "https://read-reader.herokuapp.com/",
      github: "https://github.com/ast19004/ReadReader",
      github2: "https://github.com/ast19004/ReadReader-server",
      srcList: [
        { media: "(max-width: 500px)", srcSet: readReader500px },
        { media: "(max-width: 850px)", srcSet: readReader900px },
      ],
      defaultSrc: readReaderDefault,
      alt: "Link to Read Reader Application",
      themeColor: "#49c5b6"
    }
  },
  {
    Component: Project,
    props: {
      title: "Scootz",
      description: <><p style={{ ...paragraphStyle, padding: '0.5rem 0' }}>Scootz, a personal project, is based on a ficticious scooter company and is meant to be a rental site.<br/>I used this project as an opportunity to further my React & CSS animation skills. </p><p>TEAM: <span style={ spanStyle}>Myself (Web Developer) & Seth Astle (Industrial Designer of 3D Systems)</span></p><p>WIREFRAME: <span style={ spanStyle}>Figma</span></p><p>TECH: <span style={ spanStyle}>React, MaterialUI, CSS, Git Pages</span></p></>,
      href: "https://ast19004.github.io/scootz/",
      github: "https://github.com/ast19004/scootz/tree/main",
      srcList: [
        { media: "(max-width: 550px)", srcSet: scootz550px },
        { media: "(max-width: 850px)", srcSet: scootz900px },
      ],
      defaultSrc: scootzDefault ,
      alt: "Link to Scootz Application",
      themeColor: "#ff8c00",
    }
  },
  // {
  //   Component: Project,
  //   props: {
  //     title: "Brain Storm",
  //     description: <p>This application was created as my individual final for my Javascript class during the beginning of my Web Development journey.Using data in the trivia API found at 'https://opentdb.com/api_config.php', I created a trivia game that allows an individual to select a certain category, test their knowledge, and get their score at the end.Beyond its demonstration of Javascript skill, this application is another demonstration of playful animation and styling.</p>,
  //     href: "https://alouisa.github.io/WDD330/week14/triviaGame/",
  //     github: "https://github.com/alouisa/alouisa.github.io/tree/master/WDD330/week14/triviaGame",
  //     srcList: [
  //         { media: "(max-width: 500px)", srcSet: brainstorm500px },
  //         { media: "(max-width: 850px)", srcSet: brainstorm900px },
  //     ],
  //     defaultSrc: brainstormDefault ,
  //     alt: "Link to Brain Storm Application",
  //     themeColor: "#bb3c93"
  //   }
  // }
] 
    
  export default projects;
    