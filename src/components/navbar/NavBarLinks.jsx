import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import useStyles from './NavBarLinks.style'

function NavBarLink(props) {
  const classes = useStyles();
  return (
    <Link className={classes.btn} to={'/' + props.name} onClick={() => props.setCurrentPage(props.name)}>
      <Button className={props.className} disableRipple disableFocusRipple>
        {props.name.toUpperCase()}
      </Button>
    </Link>
  );
}

export default NavBarLink;
