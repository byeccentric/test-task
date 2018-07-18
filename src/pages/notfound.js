import React from 'react'
import Page from "./layout/PageClass"

export default class NoMatch extends Page {
    Content() {
        return (
            <div>
                <h2>404 оишбка</h2>
                <div>Потерялись</div>
            </div>
        )
    }
}