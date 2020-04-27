import React, { Component } from 'react'

class Counter extends Component {
      //Common Code Start
      constructor(props) {
        super(props);

        this.state = {
            count:0
        }
    }
    incrementCount = () => {
        console.log('incrementCount event !!!');
        this.setState((prevState) => ({
        count: prevState.count+ 1
        }))
    }
//Common Code ends



    render() {
        console.log('Count Component - this.props.render ==> ' , this.props.render);
        return (
            <div>
         {/*      {this.props.renderComp(this.state.count,this.incrementCount)}   */}
         {this.props.children(this.state.count,this.incrementCount)}
            </div>
        )
    }
}

export default Counter;
