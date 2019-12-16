import React, { Component } from "react";
import { map, omit } from "lodash";
import { apply } from "../../apply/index";
import { functions } from "../../apply/functions";
import Item from "./Item";
import "../layout.css";

export default class DisplayState extends Component {
  render() {
    return map(
      apply(
        omit(
          functions(this.props.children.key, {
            [this.props.children.filterBy]: this.props.filter
          }),
          "then"
        )
      ),
      info => {
        return (
          <div className={this.props.className}>
            <Item
              DisplayState={
                <DisplayState
                  children={this.props.children.subData}
                  filter={info.id}
                  className="details"
                />
              }
              info={info}
              children={this.props.children}
            />
          </div>
        );
      }
    );
  }
}
