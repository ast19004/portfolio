import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

import { Box } from "@mui/material";
import Explore from "../UI/Explore";

const ProjectThumbnail = (props) => {
  const [inViewStyle, setInViewStyle] = useState("");
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      setInViewStyle("fadeIn");
    }
    return () => setInViewStyle("");
  }, [inView]);
  return (
    <a
      ref={ref}
      className={props.className}
      href={props.href}
      target="_blank"
      rel="noreferrer"
    >
      <Box sx={{ position: "relative" }}>
        {props.srcList ? (
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
        )}
        <Explore className={inViewStyle} />
      </Box>
    </a>
  );
};

export default ProjectThumbnail;
