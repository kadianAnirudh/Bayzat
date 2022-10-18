import React from 'react';
import './header.css';
import logo from '../../images/logo.png';
import Badge from '@mui/material/Badge';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from 'react-router-dom'
import { useStateContext } from '../../contexts/contextProvider'
import MailIcon from '@mui/icons-material/Mail';

const Header = () => {

let { favoriteNum } = useStateContext()

let number = favoriteNum.length;

const heartStyle = {
  height: '70px',
  width: '70px',
  marginTop: '10px'
}

  return (
    <div>
        <div
        className="header"> 
          <Link to='/'>
        <div className="logo-holder">
        <img src={logo}/>
        </div>
        </Link>


        <div className="header-icon-holder">
        <Link to='/favorites'>
        {/* <Badge badgeContent={number} color="primary"> */}
          <FavoriteIcon style={heartStyle} className="head-heart"/>
          {/* </Badge> */}
        </Link>
        </div>
        </div>
    </div>
  )
}

export default Header