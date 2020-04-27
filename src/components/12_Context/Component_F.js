import React, { Component } from 'react'
import { UserConsumer } from './UserContext'

class Component_F extends Component {
    render() {        
        return (
            <div>
                <UserConsumer>
                {
                    (userName) => {
                            return <h2> Hello {userName} !!! from Component_F</h2>                                
                    }
                }
                </UserConsumer>                
            </div>
        )
    }
}

export default Component_F
