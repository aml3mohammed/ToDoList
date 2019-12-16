import React from "react";
import { Field } from "formik";
import { get, map } from "lodash";
import * as FormComponents from "./index";
// import InputLayout from "../../_layouts/InputWrapper";
import "../layout.css";

export default class FieldCreator extends React.Component {
  render() {
    return map(this.props.fields, input => {
      return (
        <Field
          name={input.name}
          render={props => {
            let InputComponentName = get(input, "comp", "TextBox");
            let FieldComponent = get(FormComponents, InputComponentName);
            return (
              <div className="input">
                <label className="label">{input.name}</label>
                <FieldComponent
                  {...props}
                  input={input}
                  stateData={this.props.stateData}
                />
                {props.form.touched[input.name] &&
                  props.form.errors[input.name] && (
                    <div className="error">{props.form.errors[input.name]}</div>
                  )}
              </div>
            );
          }}
        />
      );
    });
  }
}
