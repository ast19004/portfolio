import ProjectDetails from "./ProjectDetails";
import ProjectThumbnail from "./ProjectThumbnail";

import styles from "./Project.module.css";
import styled from "styled-components";
import { Box } from "@mui/material";

const Project = (props) => {
  return (
    <div className={styles.project}>
      <ProjectDetails
        title={props.title}
        description={props.description}
        technologies={props.children}
      />
      <ThumbnailContainer>
        <ProjectThumbnail href={props.href} src={props.src} alt={props.alt} />
      </ThumbnailContainer>
    </div>
  );
};

export default Project;

const ThumbnailContainer = styled(Box)`
  @media (min-width: 950px) {
    max-width: 40%;
  }
`;
