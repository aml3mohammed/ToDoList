import React from "react";
import FieldCreator from "./inputFields/FieldCreator";
// import ToDoLayout from "../_layouts/ToDoWrapper";
// import "./layout.css";

export default class Controller extends React.Component {
  render() {
    return (
      // <ToDoLayout>
      <FieldCreator
        fields={this.props.fields}
        stateData={this.props.stateData}
        // className="container"
      />
      // </ToDoLayout>
    );
  }
}
