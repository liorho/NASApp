import React, { useReducer, useState, createContext, Fragment } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { SnackbarContent, Slide, Fade, Snackbar, Container, Grid, CardMedia, Typography, Paper, Button, IconButton } from '@material-ui/core';
import axios from 'axios';
import NavBar from './components/navbar/NavBar.jsx';
import AppContainer from './components/app-container/AppContainer.jsx';
import './App.css';

export const HandleSnackbar = createContext(null);

function App() {
  const [snackbar, setSnackbar] = useState(false);
  const [snackbarMsg, setSnackbarMsg] = useState(false);

  const Transition = (props) => <Slide {...props} direction='up' />;
  const [transition, setTransition] = useState(() => Transition);

  return (
    <div>
      <HandleSnackbar.Provider value={{ setSnackbar, setSnackbarMsg }}>
        <Router>
          <NavBar />
          <AppContainer />
        </Router>
      </HandleSnackbar.Provider>

      <Snackbar
        bodyStyle={{ background: 'blue' }}
        className='snackbar'
        // message={snackbarMsg}
        open={snackbar}
        autoHideDuration={3000}
        onClose={() => {
          setSnackbar(false);
        }}
        TransitionComponent={transition}>
        <SnackbarContent
          style={{
            backgroundColor: '#3c2c3e',
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 'bold',
            fontSize: '0.75rem'
          }}
          message={snackbarMsg}
        />
      </Snackbar>
    </div>
  );
}

export default App;
