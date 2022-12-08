import React, {useState} from "react";
import { Link } from "react-router-dom";
import { Stack, Switch, Typography } from "@mui/material";
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';


const Navbar = () => {

  const [linkColor, setLinkColor] = useState('#3A1212')

  const switchButtonLabel = { inputProps: { 'aria-label': 'Switch demo' } };

  const themeChange = (value) => {
    if(value) {
      localStorage.setItem('theme','light');
      window.dispatchEvent(new Event("storage"));
      setLinkColor('#3A1212')
    }else {     
      localStorage.setItem('theme','dark');
      window.dispatchEvent(new Event("storage"));
      setLinkColor('#fff')
    }
  }

  
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      alignItems="center"
      px="20px"
      sx={{
        gap: { sm: "122px", xs: "40px" },
        mt: { sm: "32px", xs: "20px" },
        justifyContent: "none"
      }}
    >
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Stack direction="row" alignItems="center" gap={1}>
          <FitnessCenterIcon className="gold_gym_icon" color="primary" fontSize="large"/>
        </Stack>
       
      </Link>
      <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
        <Link
          to="/"
          style={{
            textDecoration: "none",
            //color: "#3A1212",
            color: `${linkColor}`,
            borderBottom: "3px solid #FF2625",
          }}
        >
          Home
        </Link>
        <a
          href="#exercises"
          style={{ textDecoration: "none", color: `${linkColor}` }}
        >
          Exercises
        </a>{" "}
      </Stack>

      <Stack direction="row" spacing={1} alignItems="center">
        <>Dark</> 
        <Switch {...switchButtonLabel} defaultChecked onChange={(event) => themeChange(event.target.checked)}/>
        <Typography>Light</Typography>
      </Stack>
    </Stack>
  );
};

export default Navbar;
