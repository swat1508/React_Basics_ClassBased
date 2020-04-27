import React, { Component } from 'react';



class RefComp extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef();   
    }

    componentDidMount(){
        console.log('this.inputRef.current ==>> ' , this.inputRef.current.value);
        this.inputRef.current.focus();
    }

    handleClick= () =>{
        console.log('value in textbox : ' ,this.inputRef.current.value);
        //alert('val : ' , this.inputRef.current.value);
    }
    
    render(){
    return (
        <div>            
            <input type="text" ref={this.inputRef}/>
            <button onClick={this.handleClick} >Click Me </button>
        </div>
    )
}
}



export default RefComp;
