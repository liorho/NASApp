import React, { useState, useContext } from 'react';
import { Typography, Card, Button, Icon } from '@material-ui/core';
import { useLocation, Link } from 'react-router-dom';
import axios from 'axios';

import Media from './Media.jsx';
import useStyles from './MediaCard.style';
import { HandleSnackbar } from '../../../App';
import { shadows } from '@material-ui/system';

const { REACT_APP_SERVER_URL } = process.env;

function MediaCard(props) {
  const classes = useStyles();
  const location = useLocation().pathname.slice(1);
  const { title, url, explanation } = props.data;
  let [_id, setId] = useState(props.data._id);
  let [like, toggleLike] = useState(props.data.like);
  const removedMsg = 'Item Removed'.toUpperCase();
  const savedMsg = 'Item Saved'.toUpperCase();

  const { setSnackbar, setSnackbarMsg } = useContext(HandleSnackbar);

  const toggleSave = async () => {
    try {
      toggleLike(!like);
      if (like) {
        await axios.delete(`${REACT_APP_SERVER_URL}/image/${_id}`);
        setSnackbarMsg(removedMsg);
      } else {
        const savedImage = await axios.post(`${REACT_APP_SERVER_URL}/image`, { title, url, explanation, like: true });
        setId(savedImage.data._id);
        setSnackbarMsg(savedMsg);
      }
    } catch (e) {
      setSnackbarMsg(e.response.data.msg);
    }
    setSnackbar(true);
  };

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
        <Typography id='explanation' hidden={isFavOrSearch} className={classes.explanation} gutterBottom  >
          {explanation}
        </Typography>
        <Typography id='like-btn' align='center' hidden={isHome} gutterBottom>
          <Button variant='outlined' onClick={toggleSave}>
            {like ? <Icon size='big'>thumb_down</Icon> : <Icon>thumb_up</Icon>}
          </Button>
        </Typography>
        <Typography align='center' id='back-btn' hidden={!isBackBtn}>
          <Link to='/favourites'>
            <Button variant='outlined'>
              <Icon size='big'>keyboard_backspace_icon</Icon>
            </Button>
          </Link>
        </Typography>
      </Card>
    </div>
  );
}

export default MediaCard;
