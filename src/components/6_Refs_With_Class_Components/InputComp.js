import React, { Component } from 'react'

export class InputComp extends Component {
    
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();   
    }

    focusInput=()=>{
        console.log('InputComp ==> focusInput');
        this.inputRef.current.focus();
    }
    render() {
        return (
            <div>
                <hr/>
                This is InputComp
                 <input type="text" ref={this.inputRef}/>
                 <hr/>
            </div>
        )
    }
}

export default InputComp
