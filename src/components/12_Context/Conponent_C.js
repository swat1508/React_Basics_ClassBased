import React, { Component } from 'react';
import Component_E from './Component_E';

export class Conponent_C extends Component {
    render() {
        return (
            <div>
                <hr/>
                <h1>This is Component_C</h1>
                <Component_E/>
                <hr/>
            </div>
        )
    }
}

export default Conponent_C
