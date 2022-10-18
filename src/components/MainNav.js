import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { makeStyles } from "@material-ui/core/styles";
import WhatshotIcon from '@mui/icons-material/Whatshot';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SavedSearchIcon from '@mui/icons-material/SavedSearch';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    // width: "100%",
    position: "fixed",
    bottom: 0,
    backgroundColor: "#2d313a",
    zIndex: 100,
  },
});

export default function SimpleBottomNavigation() {


  const [value, setValue] = React.useState(0);
  // const classes = useStyles();


  return (
    <div className="footer">
    <Box sx={{ width: 500 }}
    style={{backgroundColor: 'black', textAlign: 'center'}}
        // className={classes.root}
    >
      <BottomNavigation
   style={{backgroundColor: 'black', width:'100%'}}
   
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        {/* <Link to="/"><BottomNavigationAction label="Trending" icon={<WhatshotIcon />} style={{color:'white'}}/></Link>
        <Link to="/movies"><BottomNavigationAction label="Movies" icon={<LiveTvIcon/>} style={{color:'white'}}/></Link>
        <Link to="/series"><BottomNavigationAction label="TV Series" icon={<LocationOnIcon />} style={{color:'white'}}/></Link> */}
        <Link to="/favorites"><BottomNavigationAction label="Search" icon={<FavoriteIcon/>} style={{color:'white'}}/></Link>
      </BottomNavigation>
    </Box>
    </div>
  );
}
