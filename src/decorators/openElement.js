import React from 'react'

export default (Component) => class DecoratedComponent extends React.Component {
    state = {
        openElementId: null
    }

    openElement = (id) => ev => {
        if (ev) ev.preventDefault()
        this.setState({
            openElementId: id
        })
    }

    render() {
        return <Component {...this.props} openElementId = {this.state.openElementId} openElement = {this.openElement}/>
    }
}
