import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ListingScreen from './components/js/ListingScreen';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import House from './components/js/House'
import Blog from './components/Blog'
import Forum from './components/Forum'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/listing' component={ListingScreen} />
          <Route path='/house' component={House} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/blog' component={Blog} />
          <Route path='/forum' component={Forum} />

        </Switch>
      </Router>
    </>
  );
}

export default App;
