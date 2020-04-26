import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';
import { Demo } from './components/Demo';
import MyGallery from './components/Gallery';
import { Home } from './components/Home';
import { About } from './components/About';
import { NoMatch } from './components/NoMatch';
import ReactDOM from "react-dom";

function App() {
  return (
  <React.Fragment>
    <Router>
      <NavigationBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/demo" component={Demo} />
        <Route path="/gallery" component={MyGallery} />
        <Route component={NoMatch} />
      </Switch>

    </Router>
  </React.Fragment>
  );
}

export default App;


