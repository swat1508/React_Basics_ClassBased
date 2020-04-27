import React, { Component } from 'react';
import Component_F from './Component_F';

export class Conponent_C extends Component {
    render() {
        return (
            <div>
                <hr/>
                <h1>This is Component_C</h1>
                <Component_F/>
                <hr/>
            </div>
        )
    }
}

export default Conponent_C
