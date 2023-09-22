import React from 'react';

import Home from './Home'; // Corrected import paths
import About from './About'; // Corrected import paths
import Contact from './Contact'; // Corrected import paths
import Item from './Item'; // Corrected import paths

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/item/1">First item</Link>
            </li>
            <li>
              <Link to="/item/2">Second item</Link>
            </li>
            <li>
              <Link to="/item/3">Third item</Link>
            </li>
          </ul>
        </div>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/item/:id">
            <Item />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
