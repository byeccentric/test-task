import React, { Component } from "react"
import Menu from "../navigation/main"

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="divider" />
                <Menu />
            </footer>
        )
    }
}