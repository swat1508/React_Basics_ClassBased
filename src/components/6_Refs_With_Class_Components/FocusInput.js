import React, { Component } from 'react'
import InputComp from './InputComp';

class RefWithClassComp extends Component {

    constructor(props) {
        super(props);
        this.componentRef = React.createRef();
    }

    handleClick = () => {
        console.log('handleClick !!!' , this.componentRef.current); //inputComp
        this.componentRef.current.focusInput(); //call focusInput of InputComp
    }
    
    render() {
        return (
            <div>
                <hr/>
                This is FocusInput Component
                <InputComp ref={this.componentRef}/>
                <button onClick={this.handleClick}> Focus in FocusInput Comp </button>
                <hr/>
            </div>
        )
    }
}



export default RefWithClassComp;
