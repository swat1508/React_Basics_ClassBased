import React from 'react'

/* Below is sample code for React Functional Component using Arrow function

const  FRInput = () => {
    return (
        <div>
            <h1>This is FRInput !!!! </h1>
        </div>
    )
}
*/


const FRInput = React.forwardRef( (props,ref) => {
    return (
        <div>
            <h1>This is FRInput..... !!!! </h1>
            <input typ="text" ref={ref} />
        </div>
    )
}

) 

export default FRInput;
