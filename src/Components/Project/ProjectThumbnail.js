const ProjectThumbnail = (props) => {
  return (
    <a
      className={props.className}
      href={props.href}
      target="_blank"
      rel="noreferrer"
    >
      <div
        style={{
          marginTop: "60px",
          borderRadius: "10px",
        }}
      >
        {props.srcList ? (
          <picture
            sx={{ display: "block", maxWidth: "100%", maxHeight: "100%" }}
          >
            {props.srcList.map(({ media, srcSet }) => (
              <source media={media} srcSet={srcSet} />
            ))}
            <img src={props.defaultSrc} alt={props.alt} />
          </picture>
        ) : (
          <img src={props.defaultSrc} alt={props.alt} />
        )}
      </div>
    </a>
  );
};

export default ProjectThumbnail;
