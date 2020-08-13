import React, { useState } from 'react';
import { Avatar, AppBar, Toolbar, CardMedia, Grid, Typography } from '@material-ui/core';
import NavBarLinks from './NavBarLinks';
import useStyles from './NavBar.style';

function NavBar(props) {
  const classes = useStyles();
  const [currentPage, setCurrentPage] = useState('');
  return (
    <AppBar position='sticky'>
      <Toolbar className={classes.navbar}>
        <NavBarLinks name='home' className={currentPage === 'home' ? classes.active : classes.inActive} setCurrentPage={setCurrentPage} />
        <NavBarLinks name='search' className={currentPage === 'search' ? classes.active : classes.inActive} setCurrentPage={setCurrentPage} />
        <NavBarLinks name='favourites' className={currentPage === 'favourites' ? classes.active : classes.inActive} setCurrentPage={setCurrentPage} />
        <Avatar className={classes.img} src='https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg' />
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
