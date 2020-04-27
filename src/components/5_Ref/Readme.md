
1. Create ref
 constructor(props) {
        super(props)
        this.inputRef = React.createRef();
        
    }

2. Attach ref to element
<input type="text" ref={this.inputRef}/>    

3. 