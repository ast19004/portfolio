const ProjectThumbnail = (props) => {
  return (
    <a href={props.url} target="_blank" rel="noreferrer">
      <div
        style={{
          marginTop: "60px",
          width: "300px",
          height: "300px",
          border: "1px solid gray",
          background: "#888",
        }}
      >
        ProjectThumbnail
      </div>
    </a>
  );
};

export default ProjectThumbnail;
