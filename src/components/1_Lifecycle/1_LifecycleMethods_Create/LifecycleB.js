import React, { Component } from 'react'

 class LifecycleB extends Component {
    constructor(props) {
        super(props)
        this.state = {
             name:'swatantra'
        }
        console.log('LifecycleB-Costructor');
    }
    
    static getDerivedStateFromProps(props,state){
        console.log('LifecycleB- getDerivedStateFromProps');
        return null;
    }

componentDidMount(){
    console.log('LifecycleB- componentDidMount');
}
    render() {
        console.log('LifecycleB-render');
        return (
            <div> Lifecycle - B </div>
           
        )
    }
}

export default LifecycleB
