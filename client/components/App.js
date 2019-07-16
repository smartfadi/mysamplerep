import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import Home from './Home/Home'
import Signup from './Signup'
import Signin from './Signin'
import Dashboard from './Dashboard'

class App extends React.Component {
  render() {
    return (
      <Router>
        {/* <Switch> */}
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/signup" component={Signup} />
          <Route path="/signin" component={Signin} />
          {/* <Route component={Dashboard} /> */}
        </div>
        {/* </Switch> */}
      </Router>
    );
  }
}
export default App