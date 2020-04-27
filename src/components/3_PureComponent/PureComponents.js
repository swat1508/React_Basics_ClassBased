import React, { PureComponent } from 'react'

export class PureComponents extends PureComponent {
    render() {
        console.log('Rendering Pure Component');
        return (
            <div>
                <h1>This is Pure-Component created by {this.props.name} </h1>
            </div>
        )
    }
}

export default PureComponents
