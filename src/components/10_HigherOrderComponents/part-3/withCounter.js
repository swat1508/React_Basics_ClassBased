import React,{Component} from 'react';

const withCounter = (WrappedComponent,incrementNumber) => { //function start with small
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
                count: prevState.count+ incrementNumber
                }))
            }
        //Common Code ends

        render(){
            console.log(this.props);
            return <WrappedComponent count={this.state.count} increaseCount={this.increaseCount} {...this.props}/>
        }
    }
    return WithCounter;
}

export default withCounter;