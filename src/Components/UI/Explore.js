import { Box, Typography } from "@mui/material";

import LaunchIcon from "@mui/icons-material/Launch";

const Explore = (props) => {
  return (
    <Box component="span" className={props.className} sx={props.sx}>
      <LaunchIcon fontSize="large" sx={{ color: 'white',}} />
      &nbsp;
      <Typography fontSize="large"></Typography>
    </Box>
  );
};

export default Explore;
