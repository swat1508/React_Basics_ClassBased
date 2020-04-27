import React, { Component } from 'react';
import LifecycleB from './LifeCycle_B';

 class LifecycleA extends Component {
    constructor(props) {
        super(props)
        this.state = {
             name:'swatantra'
        }
        console.log('LifecycleA-Costructor');
    }
    
    static getDerivedStateFromProps(props,state){
        console.log('LifecycleA- getDerivedStateFromProps');
        return null;
    }

componentDidMount(){
    console.log('LifecycleA- componentDidMount');
}

shouldComponentUpdate(){
    console.log('LifecycleA- shouldComponentUpdate');
    return true;
}

getSnapshotBeforeUpdate(){
    console.log('LifecycleA- getSnapshotBeforeUpdate');
    return null;
}

componentDidUpdate(){
    console.log('LifecycleA- componentDidUpdate');
}
changeState = () =>{
    this.setState({
        name:'sinha'
    });
}
    render() {
        console.log('LifecycleA-render');
        return (
            <div>
                <button onClick={this.changeState}>Change Name</button>
            <div> Lifecycle - A     </div>
            <LifecycleB/>
            </div>
        )
    }
}

export default LifecycleA
