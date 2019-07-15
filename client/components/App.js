import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Greetings from './Greetings'
import Signup from './Signup'
import Signin from './Signin'
import Dashboard from './Dashboard'

class App extends React.Component {
  render() {
    return (
      <Router>
        {/* <Switch> */}
        <div>
          <Route path='/' component={Greetings} />
          <Route path='/singup' exact component={Signup} />
          <Route path='/signin' component={Signin} />
          {/* <Route component={Dashboard} /> */}
        </div>
        {/* </Switch> */}
      </Router>
    );
  }
}
export default App