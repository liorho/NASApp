import React, { useEffect, useState, Fragment, useContext } from 'react';
import { Snackbar, Container, Typography, Card, CardActions, CardContent, Button, Icon, Hidden, IconButton } from '@material-ui/core';
import Media from './Media.jsx';
import useStyles from './MediaCard.style';
import axios from 'axios';
import {HandleSnackbar} from '../../../App'

const { REACT_APP_SERVER_URL } = process.env;

function MediaCard(props) {

  const classes = useStyles();
  const { location } = props;
  const { title, url, explanation } = props.data;
  let [_id, setId] = useState(props.data._id);
  let [like, toggleLike] = useState(props.data.like);

  const { setSnackbar, setSnackbarMsg } = useContext(HandleSnackbar);

  const likeImage = async () => {
    try {
      toggleLike(!like);
      if (like) {
        await axios.delete(`${REACT_APP_SERVER_URL}/image/${_id}`);
        setSnackbar(true)
        setSnackbarMsg('The item has been removed from your favorites')
      } else {
        const savedImage = await axios.post(`${REACT_APP_SERVER_URL}/image`, { title, url, explanation, like: true });
        setId(savedImage.data._id);
        setSnackbar(true)
        setSnackbarMsg('The item has been added to your favorites')
      }
    } catch (e) {
      setSnackbar(true)
      setSnackbarMsg(e)
    }
  };

  return (
    <div>
      <Card className={`${classes.root} ${location === 'home' ? classes.homeRoot : ''}`}>
        <Typography name='title' align='center' gutterBottom className={`${classes.header} ${location === 'home' ? classes.homeHeader : ''}`}>
          {title}
        </Typography>
        <Media url={url} />
        <Typography hidden={location !== 'home'} className={classes.explanation}>
          {explanation}
        </Typography>
        <Typography hidden={location === 'home'}>
          <Button onClick={likeImage}>{like ? <Icon size='big'>thumb_down</Icon> : <Icon>thumb_up</Icon>}</Button>
        </Typography>
      </Card>
    </div>
  );
}

export default MediaCard;
