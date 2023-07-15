import { Box, Typography } from "@mui/material";

import LaunchIcon from "@mui/icons-material/Launch";

const Explore = (props) => {
  return (
    <Box component="span" className={props.className}>
      <LaunchIcon fontSize="small" />
      &nbsp;
      <Typography fontSize="medium">Explore</Typography>
    </Box>
  );
};

export default Explore;
