import styles from "./ProjectDetails.module.css";
const ProjectDetails = (props) => {
  return (
    <section className={styles["project-details"]}>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <div>Technologies....</div>
    </section>
  );
};

export default ProjectDetails;
