import React, { useState, Fragment } from 'react';
import { TextField, Button, Grid, Icon , InputAdornment} from '@material-ui/core';
import useStyles from './SearchBar.style';

function SearchBar(props) {
  const [searchStr, setInput] = useState('');
  const classes = useStyles();

  const handleChange = (e) => setInput(e.target.value);
  const getResults = () => props.getResults(searchStr);

  const searchResults = (ev) => {
    if (ev.key === 'Enter') {
      getResults()
      ev.preventDefault();
    }
  }
  return (
    <Grid container justify='center' className={classes.root} >
      <TextField
        size='small'
        rowsMax={4}
        variant='outlined'
        className={classes.input}
        value={searchStr}
        onChange={handleChange}
        onKeyPress={searchResults}
        fullWidth
        InputProps={{
          startAdornment: <InputAdornment position="start"><Icon>search</Icon></InputAdornment>,
        }}
      />
    </Grid>
  );
}

export default SearchBar;
