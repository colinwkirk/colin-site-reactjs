import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import { NavigationBar } from './components/NavigationBar';
import { Demo } from './components/Demo';
import MyGallery from './components/Gallery';
import FooterPage from "./components/Footer";
import NavbarPage from "./components/Navbar";
import { Home } from './components/Home';
import { About } from './components/About';
import { NoMatch } from './components/NoMatch';
import ReactDOM from "react-dom";
import { createBrowserHistory } from 'history';
import 'mdbreact/dist/css/mdb.css'


function App() {
  return (
  <React.Fragment>
    <Router>
      <NavbarPage />
      <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/demo" component={Demo} />
          <Route path="/gallery" component={MyGallery} />
          <Route component={NoMatch} />
      </Switch>
    <FooterPage />
    </Router>
  </React.Fragment>
  );
}

const history = createBrowserHistory();
// eslint-disable-next-line no-restricted-globals
const path = (/#!(\/.*)$/.exec(window.location.hash) || [])[1];
if (path) {
    history.replace(path);
}

export default App;


