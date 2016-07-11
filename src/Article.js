import React, { Component, PropTypes } from 'react'
import CommentList from './CommentList'

class Article extends Component {

    static propTypes = {
        article: PropTypes.object.isRequired
    }

/*
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false
        }
    }
*/

    render() {
        const { isOpen, openArticle, closeArticle, article: { title, text, comments } } = this.props
            const body = isOpen ? <section>{ text } <CommentList comments = {comments} /></section> : null
            // const titleFunction = isOpen ? closeArticle : openArticle
            return (
                <div>
                    <h1 onClick = { isOpen ? closeArticle : openArticle }>{ title }</h1>
                    {body}
                </div>
            )
    }
}

export default Article
