import { Box } from "@mui/system";

const ListImage = (props) => {
  const classes = props.className ? props.className : "";
  const opacity = props.opacity ? props.opacity : "100%";
  return (
    <li>
      <Box
        component="img"
        className={classes}
        sx={{
          // height: { xs: 24, md: 36 },
          // width: { xs: 24, md: 36 },
          maxHeight: "100%",
          filter: "grayscale(100%)",
          opacity: opacity,
        }}
        alt={props.alt}
        src={props.src}
      />
    </li>
  );
};
export default ListImage;
