import React, { Component } from 'react'

class HoverCounter extends Component {
    render() {
        const {count,incrementCount} = this.props;
        
        return (
            <div>
                <h1 onMouseOver={incrementCount} >Clicked {count} times </h1>        
            </div>
        )
    }
}

export default HoverCounter;
