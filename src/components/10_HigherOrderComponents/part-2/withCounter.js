import React,{Component} from 'react';

const withCounter = (WrappedComponent) => { //function start with small
    class WithCounter extends Component{  //Component start with capital

        //Common Code Start
            constructor(props) {
                super(props);

                this.state = {
                    count:0
                }
            }
            increaseCount = () => {
                console.log('increaseCount event !!!');
                this.setState((prevState) => ({
                count: prevState.count+1
                }))
            }
        //Common Code ends

        render(){
            return <WrappedComponent count={this.state.count} increaseCount={this.increaseCount} />
        }
    }
    return WithCounter;
}

export default withCounter;