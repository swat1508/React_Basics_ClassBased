import React, { Component } from 'react'

 class ClickCounter extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
             count:0
        }
    }
    increaseCount = () => {
        console.log('handleClick event !!!');
         this.setState((prevState) => ({
           count: prevState.count+1
         }))
    }

    render() {
        return (
            <div>
                <button onClick={this.increaseCount} > Clicked {this.state.count} times </button>
            </div>
        )
    }
}

 export default ClickCounter;

    

