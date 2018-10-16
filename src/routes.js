import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Books from './containers/Books/Books';
import Chapters from './containers/Chapters/Chapters';

class Routes extends Component {
  render() {
    return (
      <div>
        <Navbar />
            <Switch>
                <Route exact path='/' component={ Books }/>
                <Route exact path='/:id' component={ Chapters }/>
            </Switch>
        <Footer />
      </div>
    );
  }
}

export default Routes;