import React from 'react';
import { Route, Switch } from "react-router-dom";
import Login from './components/login';
import Dashboard from './components/dashboard';
import NewListing from './components/and-new-listing';




export default (

                <Switch>
                
                        <Route component={ Login } path='/' exact/>
                        <Route component={ Dashboard } path='/dashboard'/>
                        <Route component={ NewListing } path='/wizard'/>
                
                    </Switch>

)
  

            

     


