import React, { Component } from 'react';
import FRInput from './FRInput';

class FRParentInput extends Component {
    constructor(props) {
        super(props);
        this.inputRef=React.createRef();
    }
    clickHandler = () => {
        console.log('clickHandler called !!!');
        this.inputRef.current.focus();
    }
    
    render() {
        return (
            <div>
              <h1>This is FRParentInput  </h1>
                <FRInput ref={this.inputRef} />
                <button onClick={this.clickHandler}>Focus Input</button>
            </div>
        )
    }
}

export default FRParentInput
