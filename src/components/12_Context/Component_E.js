import React, { Component } from 'react'
import Component_F from './Component_F';
import UserContext from './UserContext';

class Component_E extends Component {
    static context_type = UserContext;
    render() {
        return (
            <div>
                <h1>This is Component_E and value fetched using contextType is : {this.context_type}</h1>
                <Component_F/>
            </div>
        )
    }
}

export default Component_E
