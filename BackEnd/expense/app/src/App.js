import React, { Component } from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';

import Category from './Category';
import Home from './Home';
import Expenses from './Expenses';

class App extends Component {
    state = {  }
    render() { 
        return ( 
            <BrowserRouter>
                <Switch>
                    <Route path='/' exact ={true} Component={Home}/>
                    <Route path='/categories' exact ={true} Component={Category}/>
                    <Route path='/expenses' exact ={true} Component={Expenses}/>
                </Switch>
            </BrowserRouter>
         );
    }
}
 
export default App;