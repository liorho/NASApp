import React, { useState, Fragment, useRef } from 'react';
import { TextField, Button, Grid, Icon , InputAdornment} from '@material-ui/core';
import useStyles from './SearchBar.style';

function SearchBar(props) {
  const [searchStr, setInput] = useState('');
  const inputEl = useRef(null)
  const classes = useStyles();

  const handleChange = (e) => setInput(e.target.value);
  const getResults = () => props.getResults(searchStr);

  const searchResults = (ev) => {
    if (ev.key === 'Enter') {
      getResults()
      ev.preventDefault();
      inputEl.current.blur()
    }
  }


  return (
    <Grid container justify='center' className={classes.root} >
      <TextField
        // variant="filled"
        ref={inputEl}
        size='small'
        rowsMax={4}
        variant='outlined'
        className={classes.input}
        value={searchStr}
        onChange={handleChange}
        onKeyPress={searchResults}
        fullWidth
        label="SEARCH THE UNIVERSE"
        InputProps={{
          startAdornment: <InputAdornment position="start"><Icon>search</Icon></InputAdornment>,
          // className: classes.multilineColor
        }}
        // gutterBottom
      />
    </Grid>
  );
}

export default SearchBar;
