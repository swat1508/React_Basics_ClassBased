the case is similar to 6

Parent has button and Child has textbox, on click on button textbox should get focus

Parent is FRParentInput and Child in FRInput


FRParentInput
-------------
 constructor(props) {
        super(props);
        this.inputRef=React.createRef();
    }
    
 <FRInput ref={this.inputRef} />
<button onClick={this.clickHandler}>Focus Input</button>

clickHandler = () => {
        console.log('clickHandler called !!!');
        this.inputRef.current.focus();
    }

FRInput
-------
We can have function component using Arrow function like
/* Below is sample code for React Functional Component using Arrow function

const  FRInput = () => {
    return (
        <div>
            <h1>This is FRInput !!!! </h1>
        </div>
    )
}
*/

to use ForwardRef mean ref forwarded from parent , we will do as below:

const FRInput = React.forwardRef( (props,ref) => {
    return (
        <div>
            <h1>This is FRInput..... !!!! </h1>
            <input typ="text" ref={ref} />
        </div>
    )
}

) 