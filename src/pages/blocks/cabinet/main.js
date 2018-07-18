import React, { Component } from "react"
import { connect } from "react-redux"
import { NavLink as Link } from "react-router-dom"
import { logOut } from '../../../store/actions/SessionActions'

import "./main.css"

class Cabinet extends Component {
    logOut(e) {
        e.preventDefault();
        this.props.dispatch(
            logOut()
        );
        console.log('LogOut');
    }

    render() {
        return (
            <ul className="cabinet">
                <li><Link to={this.props.user ? '/profile' : '/login'} activeClassName="active">{this.props.user ? 'Профиль' : 'Логин'}</Link></li>
                { this.props.user ? <li><Link to="" onClick={this.logOut.bind(this)}>Выйти</Link></li> : '' }
            </ul>
        )
    }
}

const mapStateToProps = store => ({
    user: store.session.user
})

export default connect(mapStateToProps)(Cabinet)