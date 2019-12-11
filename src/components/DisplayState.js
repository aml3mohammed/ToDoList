import React, { Component } from "react";
import { connect } from "react-redux";
import { map, filter, get } from "lodash";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./DisplayState.css";

class DisplayState extends Component {
  // constructor(props) {
  //     super(props)
  //     this.state = {
  //         "clicked": false
  //     }
  // }

  render() {
    return map(
      filter(get(this.props.data, this.props.children.key), {
        [this.props.children.filterBy]: this.props.filter
      }),
      info => {
        return (
          <div>
            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
              >
                <Typography>{info.title}</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  {this.props.children.subData && (
                    <DisplayState
                      children={this.props.children.subData}
                      data={this.props.data}
                      filter={info.id}
                    />
                  )}
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>

            {/* <br/>
                        <li 
                            onClick={
                            ()=>{this.setState({"clicked": !this.state.clicked})}
                            }
                        >
                            {info.title}
                        </li>
                        {this.props.children.subData && this.state.clicked && <DisplayState children={this.props.children.subData} data={this.props.data} filter={info.id}/>} */}
          </div>
        );
      }
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state
  };
};

export default connect(mapStateToProps)(DisplayState);
