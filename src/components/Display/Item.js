import React, { Component } from "react";
import ExpandHeader from "./ExpandHeader";

export default class Item extends Component {
  constructor(props) {
    super(props);
    this.handler = this.handler.bind(this);
    this.state = {
      expanded: false
    };
  }
  handler() {
    this.setState({
      expanded: !this.state.expanded
    });
  }
  render() {
    let DisplayState = this.props.DisplayState;
    return (
      <div>
        <ExpandHeader expand={this.handler} expanded={this.state.expanded}>
          {this.props.info.title}
        </ExpandHeader>
        {this.props.children.subData && this.state.expanded && DisplayState}
      </div>
    );
  }
}

// import ExpansionPanel from "@material-ui/core/ExpansionPanel";
// import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
// import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
// import Typography from "@material-ui/core/Typography";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

// import React, { Component } from "react";

// export default class item extends Component {
//   render() {
//     let DisplayState = this.props.DisplayState;
//     return (
//       <div>
//         <ExpansionPanel>
//           <ExpansionPanelSummary
//             expandIcon={<ExpandMoreIcon />}
//             aria-controls="panel1a-content"
//           >
//             <Typography>{this.props.info.title}</Typography>
//           </ExpansionPanelSummary>
//           <ExpansionPanelDetails>
//             <Typography>
//               {this.props.children.subData && DisplayState}
//             </Typography>
//           </ExpansionPanelDetails>
//         </ExpansionPanel>
//       </div>
//     );
//   }
// }
