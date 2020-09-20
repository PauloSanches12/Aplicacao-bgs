import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import Charts from './pages/Charts';
import Home from './pages/Home';
import Records from './pages/Records';

const Routes = () => (
    <BrowserRouter>
            <Header/>
            <Route path="/" component={Home} exact />
            <Route path="/records" component={Records} />
            <Route path="/charts" component={Charts} />
    </BrowserRouter>
);

export default Routes;