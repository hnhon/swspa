import React from 'react';
import './App.css';
import Nav from './Nav';
import About from './About';
import Items from './Items';
import Item from './Itemdetail';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path='/' exact component={About} />
          <Route path='/about' component={About} />
          <Route path='/items' exact component={Items} />
          <Route path='/items/:id' component={Item} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
