import React from 'react'

const NewsItem = (item) => (
    <div className="news__item">
        <h4>{item.title}</h4>
        <p>{item.text}</p>
    </div>
)


export default NewsItem