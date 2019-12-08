import React, { Component } from 'react';


export class TextBox extends Component {
    validate(value){
        let errorMessage;
        if (!value) {
            errorMessage = 'Required';
        } else if (value.length > 15) {
            errorMessage = 'Must be 15 characters or less';
        }
        return errorMessage;
    };
    render() {
        const {input, field} = this.props
        return (
            <input {...field} {...input}/>
        )
    }
}

