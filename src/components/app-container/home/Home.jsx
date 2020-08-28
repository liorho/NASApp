import React, { useEffect, useState, useContext } from 'react';
import { Container } from '@material-ui/core';
import MediaCard from '../media-card/MediaCard.jsx';
import { BrowserRouter as Router, Route, useLocation } from 'react-router-dom';
import { HandleSnackbar } from '../../../App'

import useStyles from './Home.style';
import axios from 'axios';

// require('dotenv').config()
const { REACT_APP_APOD_URL, REACT_APP_API_KEY } = process.env;
console.log(process.env)

function Home() {
  const [apod, setApod] = useState({});
  const classes = useStyles();
  const location = useLocation().pathname.slice(1);
  const { setSnackbar, setSnackbarMsg } = useContext(HandleSnackbar);

  const getApod = async () => {
    try {
      // const res = await axios.get(`${REACT_APP_APOD_URL}/apod?api_key=${REACT_APP_API_KEY}`);
      const res = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=bol5WjZ3645i00tImKUDafUGuG5jBoBhfSOMTrMy`);
      setApod({ ...res.data });
    } catch (e) {
      console.log(e.response.data.msg);
      setSnackbar(true);
      setSnackbarMsg(e.response.data.msg);
    }
  };

  useEffect(() => {
    getApod();
  }, []);

  return (
    <Container>
      <MediaCard data={apod} location={location} />
    </Container>
  );
}

export default Home;
