import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link, Redirect, Switch} from 'react-router-dom';
import EditView from './views/editor';
import Preview from './views/preview';


const App = () => (
    <Router>
        <div>

            <Route path="/" exact component={EditView}/>
            <Route path="/preview" exact component={Preview}/>


        </div>
    </Router>
);


export default App;
