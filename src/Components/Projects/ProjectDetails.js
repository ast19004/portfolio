import { Box, Link, Typography } from "@mui/material";
import ProjectTechnologies from "./ProjectTechonologies";

const ProjectDetails = (props) => {
  return (
    <section className={props.className}>
      <Box component="h2" className="font-medium" sx={{ color: props.themeColor ? props.themeColor : "blue",}}>{props.title}</Box>
      {props.description}
      <Link
        href={props.github}
        target="_blank"
        color="white"
        underline="none"
        sx={{
          padding: "0.7rem",
          borderRadius: "1rem",
          boxShadow: "4px 4px 8px #8888886e",
          display: "inline-block",
          marginTop: "0.5rem",
          backgroundColor: props.themeColor ? props.themeColor : "blue",
          "&:hover": {
            backgroundColor: "white",
            color: props.themeColor ? props.themeColor : "blue"
          }
        }}
      >
        {!props.github2 ? <b>View My Code</b> : <b>View Frontend</b>}
      </Link>
      {props.github2 && (
        <>
          <Typography
            component="span"
            color="white"
            fontSize="3rem"
            sx={{ verticalAlign: "middle" }}
          >
            {" "}
            {" "}
          </Typography>
          <Link
            href={props.github2}
            target="_blank"
            color="white"
            underline="none"
            sx={{
              padding: "0.7rem",
              borderRadius: "1rem",
              boxShadow: "4px 4px 8px #8888886e",
              marginTop: "0.5rem",
              backgroundColor: props.themeColor ? props.themeColor : "blue",
              "&:hover": {
                backgroundColor: "white",
                color: props.themeColor ? props.themeColor : "blue"
              }
            }}
          >
            <b>View Backend</b>
          </Link>
        </>
      )}
      {/* <ProjectTechnologies children={props.technologies} /> */}
    </section>
  );
};

export default ProjectDetails;
