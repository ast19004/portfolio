import { Link } from "@mui/material";
import ProjectTechnologies from "./ProjectTechonologies";
const ProjectDetails = (props) => {
  return (
    <section className={props.className}>
      <h2 className="font-medium">{props.title}</h2>
      <p className="gray">{props.description}</p>
      <Link
        href={props.github}
        target="_blank"
        color="#777"
        underline="none"
        sx={{ padding: "5px" }}
      >
        {!props.github2 ? <b>View My Code</b> : <b>View Frontend Code</b>}
      </Link>
      {props.github2 && (
        <>
          |
          <Link
            href={props.github2}
            target="_blank"
            color="#777"
            underline="none"
            sx={{ padding: "5px" }}
          >
            <b>View Backend Code</b>
          </Link>
        </>
      )}
      <ProjectTechnologies children={props.technologies} />
    </section>
  );
};

export default ProjectDetails;
