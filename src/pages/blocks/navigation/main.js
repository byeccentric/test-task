import React, { Component } from "react"
import { NavLink as Link } from "react-router-dom"
import { routes } from "../../../config/routes"


import "./main.css"

export default class Menu extends Component {
    render() {
        return (
            <ul className="nav">
                {routes.map((route, index) => route.menu ? <li key={index}><Link exact={route.exact} to={route.path} label={route.name} activeClassName="active">{route.name}</Link></li> : false)}
            </ul>
        )
    }
}