import React, { Component } from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "../layout.css";

export default class Expand extends Component {
  render() {
    return (
      <div className="expandHeader">
        {this.props.expanded ? (
          <div className="collapse">
            <ExpandMoreIcon onClick={this.props.expand} />
          </div>
        ) : (
          <div className="expand">
            <ExpandMoreIcon onClick={this.props.expand} />
          </div>
        )}

        <h3>{this.props.children}</h3>
        <button className="edit">Edit</button>
      </div>
    );
  }
}
