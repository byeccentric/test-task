import React from 'react'
import Page from "./layout/PageClass"
import { connect } from "react-redux"

import { getNews } from '../store/actions/NewsActions'

import NewsItem from './blocks/newsItem'

class News extends Page {
    componentWillMount() {
        if (!this.props.fetched) {
            this.props.dispatch(getNews())
        }
    }

    Content() {
        if (this.props.fetching) {
            return (
                <div>
                    <h2>Новости</h2>
                    <div>Загружаем ...</div>
                </div>
            )
        } else if (this.props.fetched) {
            console.log(this.props.news);
            let NewsList = this.props.news.map((item) => <NewsItem key={item.id} title={item.title} text={item.text} />)
            return (
                <React.Fragment>
                    <h2>Новости</h2>
                    {NewsList}
                    <div>Всего новостей: {this.props.news.length}</div>
                </React.Fragment>
            )
        }
    }
}

const mapStateToProps = store => ({
    news: store.news.items,
    fetched: store.news.fetched,
    fetching: store.news.fetching,
    error: store.news.errorMsg
})

export default connect(mapStateToProps)(News)