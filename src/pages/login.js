import React from 'react'
import { connect } from "react-redux"
import { Redirect } from 'react-router-dom'
import { logIn } from '../store/actions/SessionActions'
import Page from "./layout/PageClass"

class Login extends Page {
    componentDidUpdate() {
        if (this.props.errorMsg) {
            document.querySelector('#password').value = '';
        }
    }

    submit(e) {
        e.preventDefault();
        let login = e.target.querySelector('#login').value;
        let password = e.target.querySelector('#password').value;
        this.props.dispatch(
            logIn({
                username: login,
                password: password
            })
        )
    }

    Content() {
        const { location, errorMsg } = this.props
        const { from } = location.state || { from: { pathname: '/' } }

        if (this.props.user) {
            return <Redirect to={from} />
        }

        return (
            <div style={{"maxWidth": "600px"}}>
                <h2>ЛОГИН</h2>
                {errorMsg && <p style={{"color" : "red"}}>{errorMsg}</p>}
                <form onSubmit={this.submit.bind(this)}>
                    <label htmlFor="login">Ваш логин</label>
                    <input type="text" id="login" name="login" />
                    <br/>
                    <label htmlFor="password">Ваш логин</label>
                    <input type="password" id="password" name="password" />
                    <input type="submit" value="Войти" />
                </form>
            </div>
        )
    }
}

const mapStateToProps = store => ({
    user: store.session.user,
    errorMsg: store.session.errorMsg
})

export default connect(mapStateToProps)(Login)