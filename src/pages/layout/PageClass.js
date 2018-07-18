import React, { Component } from 'react'
import Header from "../blocks/header/main"
import Footer from "../blocks/footer/main"

export default class Page extends Component {
    Header() {
        return (
            <Header />
        )
    }

    Footer() {
        return (
            <Footer />
        )
    }

    Content() {
        return (
            <h1>Hello World</h1>
        )
    }

    render() {
        return (
            <React.Fragment>
                {this.Header()}
                <main>
                    <div className="section">
                        {this.Content()}
                    </div>
                </main>
                {this.Footer()}
            </React.Fragment>
        )
    }
}