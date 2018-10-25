import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Books from './containers/Books/Books';
import Chapters from './containers/Chapters/Chapters';
import Verses from './containers/Verses/Verses';

class Routes extends Component {
  render() {
    return (
      <div>
        <Navbar />
            <Switch>
                <Route exact path='/' component={ Books }/>
                <Route exact path='/:book' component={ Chapters }/>
                <Route path="/:book/:chapter" component={Verses}/>
            </Switch>
        <Footer />
      </div>
    );
  }
}

export default Routes;