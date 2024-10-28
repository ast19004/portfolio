import { Box } from "@mui/system";

const ListImage = (props) => {
  const opacity = props.opacity ? props.opacity : "100%";
  return (
    <li className={props.className}>
      <Box
        component="img"
        sx={{
          // height: { xs: 24, md: 36 },
          // width: { xs: 24, md: 36 },
          maxHeight: "100%",
          width: "auto",
          filter: "grayscale(100%) contrast(77%)",
          opacity: opacity,
          "&:hover": {
            opacity: "100%",
          },
        }}
        alt={props.alt}
        src={props.src}
      />
    </li>
  );
};
export default ListImage;
