import React from 'react';
import {Grid, CardMedia} from '@material-ui/core';
import ReactPlayer from 'react-player';
import useStyles from './Media.style'

function Media(props) {
  const classes = useStyles();
  const {url} = props
  const mediaComponant = url ? (
    url.includes('jpg') ? (
      <CardMedia height='100%' component='img' image={url} />
    ) : (
      <ReactPlayer className={classes.media} url={url} playing controls />
    )
  ) : null;

  return (
      <Grid container direction='column' alignItems='center' className={classes.media}>
        {mediaComponant}
      </Grid>
  );
}

export default Media;
