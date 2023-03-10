const ProjectThumbnail = (props) => {
  return (
    <a href={props.href} target="_blank" rel="noreferrer">
      <div
        style={{
          marginTop: "60px",
          width: "350px",
          height: "250px",
          border: "1px solid rgba(50, 50, 50, 0.3)",
          background: "rgba(50, 50, 50, 0.2)",
          borderRadius: "10px",
        }}
      >
        <img
          src={props.src}
          alt={props.alt}
          style={{ maxWidth: "100%", maxHeight: "100%" }}
        />
      </div>
    </a>
  );
};

export default ProjectThumbnail;
