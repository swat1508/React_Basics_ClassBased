import React, { Component } from 'react'

 class MyUser extends Component {
    render() {
        return (
            <div>
                {this.props.name(false)}
            </div>
        )
    }
}

export default MyUser;
