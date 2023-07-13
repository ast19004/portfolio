import ProjectTechnologies from "./ProjectTechonologies";
const ProjectDetails = (props) => {
  return (
    <section className={props.className}>
      <h2 className="font-medium">{props.title}</h2>
      <p className="gray">{props.description}</p>
      <ProjectTechnologies children={props.technologies} />
    </section>
  );
};

export default ProjectDetails;
