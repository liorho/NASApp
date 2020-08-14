import React, { useEffect, useState } from 'react';
import { Container, Grid, Card } from '@material-ui/core';
import MediaCard from '../media-card/MediaCard.jsx';
import useStyles from './Favourites.style';
import { useLocation } from 'react-router-dom';

import axios from 'axios';

const { REACT_APP_SERVER_URL } = process.env;

function Favourites(props) {
  const [favourites, setFavourites] = useState([]);
  const classes = useStyles();

  const getFavourites = async () => {
    const queryStr = props.match.params.id ? `/?id=${props.match.params.id}` : ''
    try {
      const res = await axios.get(`${REACT_APP_SERVER_URL}/images${queryStr}`)
      setFavourites([...res.data.reverse()])
    } catch (e) {
      console.log(e)
      alert(e)
    }
  };

  useEffect(() => {
    getFavourites();
  }, []);

  return (
    <Container >
      {/* <Grid container style={{padding: 24}} alignItems="stretch"> */}
        {favourites.map((favourite, i) => (
          // <Grid key={i} className={classes.root}item component={Card} xs={12} sm={6} lg={4} xl={3}>
            <MediaCard key={i} data={favourite} />
          // </Grid>
        ))}
      {/* </Grid> */}
    </Container>
  );
}

export default Favourites;
