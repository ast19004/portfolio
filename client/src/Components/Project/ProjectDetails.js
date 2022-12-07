import styles from "./ProjectDetails.module.css";

import ProjectTechnologies from "./ProjectTechonologies";
const ProjectDetails = (props) => {
  return (
    <section className={styles["project-details"]}>
      <h2>{props.title}</h2>
      <ProjectTechnologies children={props.technologies} />
      <p>{props.description}</p>
    </section>
  );
};

export default ProjectDetails;
