import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import BeerList from './containers/beerlist'
import BeerDetail from './containers/beerdetail'


const App = ()=>(
  <Router>
    <Switch>
      <Route exact path='/' component={BeerList}/>
      <Route exact path='/beers/:id' component={BeerDetail}/>
    </Switch>
  </Router>
)

export default App;
