import { Box } from "@mui/system";

const ListImage = (props) => {
  return (
    <li>
      <Box
        component="img"
        sx={{
          height: { xs: 36, md: 48 },
          width: { xs: 36, md: 48 },
          maxHeight: "100%",
        }}
        alt={props.alt}
        src={props.src}
      />
    </li>
  );
};
export default ListImage;
