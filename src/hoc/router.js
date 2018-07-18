import React from "react"
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { routes } from "../config/routes"

const privateRoute = (rest) => (
    <Switch>
        {routes.map((route) =>
            <Route key={route.path} exact={route.exact} path={route.path} render={props =>
                (!route.auth || (route.auth && rest.isAuth))
                    ? <route.component {...props} />
                    : <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: props.location },
                        }}
                    />
            }/>
        )}
    </Switch>
)

const mapStateToProps = state => (
    { isAuth:  JSON.parse(localStorage.getItem('user')) || state.session.user }
)

export default connect(mapStateToProps)(privateRoute)