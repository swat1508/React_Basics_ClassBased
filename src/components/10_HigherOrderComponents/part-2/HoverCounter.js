import React, { Component } from 'react'
import withCounter from './withCounter';

class HoverCounter extends Component {

    render() {
        const {count,increaseCount} = this.props;
        return (
            <div>
                <h1 onMouseOver={increaseCount}> Hovered : {count} times </h1>
            </div>
        )
    }
}

export default withCounter(HoverCounter);