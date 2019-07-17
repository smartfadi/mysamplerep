import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import HomePage from './Home/Tabs/HomePage';
import Signin from './Home/Signin';
import Signup from './Home/Signup';

class Routes extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loggedIn: false
        }
    }
    render() {
        const { loggedIn } = this.state
        return (
            <div>
                <Switch>
                    <Route path="/" exact component ={ HomePage } />
                    <Route path="/dashboard" render={() => (
                        loggedIn ? (<Redirect to="/dashboard" />) : (<Redirect to="/signin" />)
                    )} />
                    <Route path="/signup" component={Signup} />
                    <Route path="/signin" component={Signin} />
                </Switch>
            </div>
        )
    }
}
export default Routes;