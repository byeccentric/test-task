import React from 'react'
import { connect } from "react-redux"

import Page from "./layout/PageClass"

import { getInfo } from '../store/actions/ProfileActions'

class Profile extends Page {
    componentWillMount() {
        if (!this.props.fetched && !this.props.fetching) {
            this.props.dispatch(getInfo());
        }
    }

    Content() {
        if (this.props.fetching) {
            return (
                <React.Fragment>
                    <h2>Профиль</h2>
                    <div>Загрузка ...</div>
                </React.Fragment>
            )
        }
        else if (this.props.fetched) {
            let {social, languages, city} = this.props.info;
            return (
                <React.Fragment>
                    <h2>Профиль</h2>
                    <p>Город: {city}</p>
                    <p>Знание языков:
                        {languages.map((item, index) => (
                            <React.Fragment key={index}>
                                <br/> + {item}
                            </React.Fragment>
                        ))}
                    </p>
                    <p>Ссылки:
                        {social.map((item, index) => (
                            <React.Fragment key={index}>
                                <br/><a href={item.link} target="_blank"> + {item.label}</a>
                            </React.Fragment>
                        ))}
                    </p>
                </React.Fragment>
            )
        }
    }
}


const mapStateToProps = store => {
    console.log(store);
    return ({
        info: store.profile.info,
        fetched: store.profile.fetched,
        fetching: store.profile.fetching,
        error: store.profile.errorMsg
    })
}

export default connect(mapStateToProps)(Profile)