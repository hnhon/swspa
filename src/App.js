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
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/items' exact component={Items} />
          <Route path='/items/:id' component={Item} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => {
  return (
    <div>
      <h1>Home page</h1>
    </div>
  )
};

export default App;
