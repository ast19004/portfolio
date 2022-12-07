import styled from "styled-components";

const ProjectTechnologies = (props) => {
  const classes = props.className ? props.className : "";
  return <TechContainer className={classes}>{props.children}</TechContainer>;
};

export default ProjectTechnologies;

const TechContainer = styled.ul`
  display: flex;
  gap: 5px;
  padding: 0;
  max-width: fit-content;
  height: 25px;
  padding: 10px;
  border: 1px solid rgba(50, 50, 50, 0.2);
  border-radius: 20px;
`;
