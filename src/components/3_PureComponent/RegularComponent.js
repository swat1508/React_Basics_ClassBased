import React, { Component } from 'react'

export class RegularComponent extends Component {
    render() {
        console.log('Rendering Regular Component');
        return (
            <div>
                <h1>This is regular-component created by {this.props.name} </h1>
            </div>
        )
    }
}

export default RegularComponent
