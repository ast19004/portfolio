import styled from "styled-components";

const ProjectTechnologies = (props) => {
  return <TechContainer>{props.children}</TechContainer>;
};

export default ProjectTechnologies;

const TechContainer = styled.ul``;
