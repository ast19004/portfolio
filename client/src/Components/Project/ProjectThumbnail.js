const ProjectThumbnail = (props) => {
  return (
    <a href={props.url} target="_blank" rel="noreferrer">
      <div
        style={{
          marginTop: "60px",
          width: "300px",
          height: "300px",
          border: "1px solid rgba(50, 50, 50, 0.3)",
          background: "rgba(50, 50, 50, 0.2)",
          borderRadius: "10px",
        }}
      >
        ProjectThumbnail
      </div>
    </a>
  );
};

export default ProjectThumbnail;
