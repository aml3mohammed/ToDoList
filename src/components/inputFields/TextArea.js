import React, { Component } from "react";

export class TextArea extends Component {
  validate(value) {
    let errorMessage;
    if (!value) {
      errorMessage = "Required";
    } else if (value.length > 100) {
      errorMessage = "Must be 100 characters or less";
    }
    return errorMessage;
  }
  render() {
    const { input, field } = this.props;
    return <textarea {...field} {...input} />;
  }
}
