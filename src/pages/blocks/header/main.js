import React, { Component } from "react"
import Menu from "../navigation/main"
import Cabinet from "../cabinet/main"

import "./main.css"

export default class Header extends Component {
    render() {
        return (
            <header className="header">
                <Menu/>
                <Cabinet/>
                <div className="divider" />
            </header>
        )
    }
}