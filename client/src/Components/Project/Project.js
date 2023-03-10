import ProjectDetails from "./ProjectDetails";
import ProjectThumbnail from "./ProjectThumbnail";

import styles from "./Project.module.css";

const Project = (props) => {
  return (
    <div className={styles.project}>
      <ProjectDetails
        title={props.title}
        description={props.description}
        technologies={props.children}
      />
      <ProjectThumbnail href={props.href} src={props.src} alt={props.alt} />
    </div>
  );
};

export default Project;
