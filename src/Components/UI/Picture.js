const Picture = (props) => { 
    return (
        props.srcList ? (
          <picture
            sx={{ display: "block", maxWidth: "100%", maxHeight: "100%" }}
          >
            {props.srcList.map(({ media, srcSet }) => (
              <source key={srcSet} media={media} srcSet={srcSet} />
            ))}
            <img src={props.defaultSrc} alt={props.alt} />
          </picture>
        ) : (
          <img src={props.defaultSrc} alt={props.alt} />
        )
    );
};

export default Picture;