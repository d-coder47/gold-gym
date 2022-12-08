import React, {useState} from "react";
import { Box, Stack, Typography} from "@mui/material";
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import "@fontsource/caveat";

const Footer = () => {
  const [textColor, setTextColor] = useState('#3A1212');

  window.addEventListener("storage", function () {
    if(localStorage.getItem('theme') === 'light') {
      setTextColor('#3A1212')
    }else {
      setTextColor('#fff')
    }
    
});

  return (
    <Box mt="80px" color="#fff3f4">
      <Stack gap="40px" alignItems="center" flexWrap="wrap" px="40px" pt="24px">
      <Stack direction="row" alignItems="center" gap={1}>
          <FitnessCenterIcon className="gold_gym_icon" color="primary" fontSize="large"/>
          <Typography
            variant="h1"
            sx={{ 
              fontSize: { lg: "38px", xs: "30px" },
              fontFamily: "caveat"
             }}
            mt="41px"
            textAlign="center"
            pb="40px"
            color={textColor}
          >
            Golds Gym
          </Typography>
        </Stack>
      </Stack>

      
     
    </Box>
  );
};

export default Footer;
