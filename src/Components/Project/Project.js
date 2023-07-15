import ProjectDetails from "./ProjectDetails";
import ProjectThumbnail from "./ProjectThumbnail";

import styles from "./Project.module.css";

const Project = (props) => {
  return (
    <div className={styles.project}>
      <ProjectThumbnail
        className={styles["project-thumbnail"]}
        href={props.href}
        srcList={props.srcList}
        defaultSrc={props.defaultSrc}
        alt={props.alt}
      />
      <ProjectDetails
        className={styles["project-details"]}
        title={props.title}
        description={props.description}
        technologies={props.children}
        github={props.github}
        github2={props.github2}
      />
    </div>
  );
};

export default Project;
