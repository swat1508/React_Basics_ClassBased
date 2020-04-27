import React from 'react'

 function MemoComp(props) {
    const name = props.name;
    console.log('rendering props - Memo Component');
    return (
        <div>
            <h1>This is Memo component - {name} </h1>
        </div>
    )
}

export default React.memo(MemoComp);