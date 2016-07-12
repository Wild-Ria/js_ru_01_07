import React from 'react'

export default (Component) => class DecoratedComponent extends React.Component {
    state = {
        openElementId: null
    }
    //хорошо, но удобнее было бы сделать еще toggleOpen
    openElement = (id) => ev => {
        if (ev) ev.preventDefault()
        this.setState({
            openElementId: id
        })
    }

    closeElement = (id) => ev => {
        if (ev) ev.preventDefault()
        this.setState({
            openElementId: null
        })
    }

    render() {
        return <Component {...this.props}
        openElementId = {this.state.openElementId} 
        openElement = {this.openElement}
        closeElement = {this.closeElement}
        />
    }
}
