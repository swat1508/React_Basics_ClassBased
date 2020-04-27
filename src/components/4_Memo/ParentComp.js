import React, { Component } from 'react'
import MemoComp from './MemoComp';

export class ParentComp extends Component {

    constructor(props) {
        super(props)
        this.state = {
             name : 'swatantra'
        }
    }
    componentDidMount(){
        console.log('componentDidMount => setInterval !!!! ');
        setInterval(() => {
            this.setState({
                name:'swatantra'
            })
        },2000);
    }
    render() {
        console.log('Rendering Parent Component');
        return (
            <div>
                    This is Parent-Component created by {this.state.name}
                    <MemoComp name={this.state.name}/>
            </div>
        )
    }
}

export default ParentComp;