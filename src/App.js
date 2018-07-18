import React, { Component } from "react"
import {Provider} from "react-redux"
import {BrowserRouter as Router, Switch} from 'react-router-dom'
import store from "./store/store"
import PrivateRoute from "./hoc/router"

import "./App.css"


class App extends Component {
    makeSwitches() {
        return (
            <Switch>
                <PrivateRoute />
            </Switch>
        )
    }

    render() {
        return (
            <Provider store={store}>
                <Router>
                    {this.makeSwitches()}
                </Router>
            </Provider>
        );
    }
}

export default App;
