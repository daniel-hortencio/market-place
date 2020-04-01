import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import User from './pages/User'
import Admin from './pages/Admin'

export default function Routes(){
    return(
        <Router>
            <Switch>
                <Route exact path="/" component={User} />
                <Route exact path="/admin" component={Admin} />
            </Switch>
        </Router>
    )
}