import { Box } from '@mui/material';
import styles from './Logo.module.css';

const Logo = (props) => { 
    return (
        <Box component="h1" className={`${styles.name}`}>
          <Box
            component="span"
          >
            Anna
          </Box>
          <Box
            component="span"
          >stle</Box>
      </Box>
);
};

export default Logo;