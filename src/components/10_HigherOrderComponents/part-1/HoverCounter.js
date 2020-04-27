import React, { Component } from 'react'

export class HoverCounter extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
             count:0
        }
    }
    
    increaseCount = () =>{
        this.setState((prevState) => ({
            count:prevState.count+1
        }))
    }


    render() {
        return (
            <div>
                <h1 onMouseOver={this.increaseCount}> Hovered {this.state.count}</h1>
            </div>
        )
    }
}

export default HoverCounter;