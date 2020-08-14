import React, { useState, createContext } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { SnackbarContent, Slide, Snackbar } from '@material-ui/core';
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
    <div id="App">
      <HandleSnackbar.Provider value={{ setSnackbar, setSnackbarMsg }}>
        <Router>
          <NavBar />
          <AppContainer />
        </Router>
      </HandleSnackbar.Provider>

      <Snackbar
        className='snackbar'
        open={snackbar}
        autoHideDuration={3000}
        onClose={() => {
          setSnackbar(false);
        }}
        TransitionComponent={transition}>
        <SnackbarContent
          style={{
            backgroundColor: '#3c2c3e',
            fontFamily: "'Red Rose', cursive",
            // fontFamily: "'Montserrat', sans-serif",
            fontWeight: 'bold',
            fontSize: '1rem',
            justifyContent: 'center',
            width: "50%",
            opacity: '0.9'
            // padding: '8px'
          }}
          message={snackbarMsg}
          // anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        />
      </Snackbar>
    </div>
  );
}

export default App;
