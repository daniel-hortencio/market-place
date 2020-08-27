import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import ProductsList from './pages/ProductsList'
import NewProduct from './pages/NewProduct'
import EditProduct from './pages/EditProduct'

export default function App() {  
  return (
    <Router>
        <Switch>
            <Route path='/products' component={ProductsList} />
            <Route path='/new' component={NewProduct} />
            <Route path='/edit/:id' component={EditProduct} />
        </Switch>
    </Router>
  );
}


