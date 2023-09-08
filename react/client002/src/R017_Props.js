import React, { Component } from 'react';

class R017_Props extends Component{
    render() {
        let props_value = this.props.props_val;
        props_value += ' from App_js'
        return (
            <div>{props_value}</div>
        )
    }
}

export default R017_Props;