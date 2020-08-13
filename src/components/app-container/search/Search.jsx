import React, { useState } from 'react';
import { Container, Grid, Card } from '@material-ui/core';
import { BrowserRouter as Router, Route, useLocation } from 'react-router-dom';

import axios from 'axios';
import SearchBar from './SearchBar.jsx';
import MediaCard from '../media-card/MediaCard.jsx';
import useStyles from './Search.style'

const { REACT_APP_NASA_IMAGES_URL } = process.env;

function Search(props) {
  const [results, setResults] = useState([]);
  const classes = useStyles();
  const location = useLocation().pathname.slice(1);

  const getResults = async (searchStr) => {
    const res = await axios.get(`${REACT_APP_NASA_IMAGES_URL}/search?q=${searchStr}`);
    const results = res.data.collection.items
      .filter((result) => result.links)
      .map((result) => ({
        url: result.links[0].href,
        title: result.data[0].title,
        explanation: result.data[0].description,
        like: false
      }));
    setResults([...results]);
  };

  return (
    <Container>
      <SearchBar getResults={getResults} />
      <Grid container alignItems="stretch">
        {results.map((result) => (
          <Grid key={result.url} className={classes.root} item component={Card} xs={12} sm={6} lg={4} xl={3} className={classes.root}>
            <MediaCard data={result} location={location} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Search;
