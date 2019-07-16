import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import Home from './Home/Home'

class App extends React.Component {
  render() {
    return (
      <Router >
        {/* <Switch> */}
        <div>
          <Route component={Home} />
        </div>
        {/* </Switch> */}
      </Router>
    );
  }
}
export default App