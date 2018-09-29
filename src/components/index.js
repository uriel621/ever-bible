import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Provider } from 'react-redux';

import store from '../store'
import { BrowserRouter } from 'react-router-dom'
import Routes from '../routes'

const App = () => (
    <Provider store={ store }>
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    </Provider>
)

export default App;
