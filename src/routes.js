import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Books from './containers/Books/Books';

const Test = () => (
    <div>
        Test
    </div>
);
class Routes extends Component {
  render() {
    return (
      <div>
        <Navbar />
            <Switch>
                <Route exact path='/' component={ Books }/>
                <Route exact path='/test' component={ Test }/>
            </Switch>
        <Footer />
      </div>
    );
  }
}

export default Routes;