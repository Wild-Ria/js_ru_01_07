import React, { Component }  from 'react'
import Article from './Article'
import openElement from './decorators/openElement'

class ArticleList extends Component {

    render() {
        const { articles, openElementId, openElement } = this.props
        const listItems = articles.map((article) => <li key={article.id}>
            <Article article = {article}
                isOpen = {article.id == this.props.openElementId}
                openArticle = {this.props.openElement(article.id)}
                closeArticle = {this.props.closeElement(article.id)}
            />
        </li>)
        return (
            <div>
                <h1>Article list</h1>
                <ul>
                    {listItems}
                </ul>
            </div>
        )
    }
}

export default openElement(ArticleList)
