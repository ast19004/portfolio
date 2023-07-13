import ProjectDetails from "./ProjectDetails";
import ProjectThumbnail from "./ProjectThumbnail";

import styles from "./Project.module.css";

const Project = (props) => {
  return (
    <div className={styles.project}>
      <ProjectThumbnail
        className={styles["project-thumbnail"]}
        href={props.href}
        src={props.src}
        alt={props.alt}
      />
      <ProjectDetails
        className={styles["project-details"]}
        title={props.title}
        description={props.description}
        technologies={props.children}
      />
    </div>
  );
};

export default Project;
