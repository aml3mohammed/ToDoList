import React, { Component } from 'react';


export class CheckBox extends Component {
    render() {
        const {input, field} = this.props
        return (
            <input {...field} {...input}/>
        )
    }
}

