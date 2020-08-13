import React, { Fragment } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Home from './home/Home.jsx';
import Search from './search/Search.jsx';
import Favourites from './favourites/Favourites.jsx';

function AppContainer() {
  return (
    <Fragment>
      <Route exact path='/' render={() => <Redirect to='/home' />} />
      <Route exact path='/home' component={Home} />
      <Route exact path='/search' component={Search} />
      <Route exact path='/favourites' component={Favourites} />
    </Fragment>
  );
}

export default AppContainer;
