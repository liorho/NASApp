import React, { useEffect, useState, Fragment, useContext } from 'react';
import { Snackbar, Container, Typography, Card, CardActions, CardContent, Button, Icon, Hidden, IconButton } from '@material-ui/core';
import Media from './Media.jsx';
import Favourites from '../favourites/Favourites.jsx';
import useStyles from './MediaCard.style';
import axios from 'axios';
import { HandleSnackbar } from '../../../App';
import { Link, Route } from 'react-router-dom';

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
        setSnackbar(true);
        setSnackbarMsg('The item has been removed from your favorites');
      } else {
        const savedImage = await axios.post(`${REACT_APP_SERVER_URL}/image`, { title, url, explanation, like: true });
        setId(savedImage.data._id);
        setSnackbar(true);
        setSnackbarMsg('The item has been added to your favorites');
      }
    } catch (e) {
      setSnackbar(true);
      setSnackbarMsg(e.response.data.msg);
    }
  };

  // const locationId = location.split('/')[1]
  const isFavOrSearch = location === 'favourites' || location === 'search';
  const isHome = location === 'home';
  const isFav = location === 'favourites';
  const isBackBtn = location !== 'favourites' && location !== 'search' && location !== 'home';

  return (
    <div>
      <Card className={`${classes.root} ${!isFavOrSearch ? classes.homeRoot : ''}`}>
        <Typography id='title' align='center' gutterBottom className={`${classes.header} ${!isFavOrSearch ? classes.homeHeader : ''}`}>
          {title}
        </Typography>
        <Link to={isFav ? `/favourites/${_id}` : `/${location}`}>
          <Media id='media' url={url} />
        </Link>
        <Typography id='explanation' hidden={isFavOrSearch} className={classes.explanation}>
          {explanation}
        </Typography>
        <Typography id='like-btn' hidden={isHome} gutterBottom>
          <Button fullWidth variant='outlined' onClick={likeImage}>
            {like ? <Icon size='big'>thumb_down</Icon> : <Icon>thumb_up</Icon>}
          </Button>
        </Typography>
        <Typography id='back-btn' hidden={!isBackBtn}>
          <Link to='/favourites'>
            <Button fullWidth variant='outlined' onClick={likeImage}>
              <Icon size='big'>keyboard_backspace_icon</Icon>
            </Button>
          </Link>
        </Typography>
      </Card>
    </div>
  );
}

export default MediaCard;
