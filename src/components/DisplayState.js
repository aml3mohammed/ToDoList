import React, { Component } from 'react';
import { connect } from 'react-redux';
import { map, filter, get } from 'lodash';
import './DisplayState.css';


class DisplayState extends Component {
    constructor(props) {
        super(props)
        this.state = {
            "clicked": false
        }
      }

    render() {
        return (
            map(
                filter(
                    get(this.props.data, this.props.children.key),
                    {[this.props.children.filterBy]: this.props.filter}
                ),
                (info) => {
                    return(
                        <div>
                        <br/>
                        <li 
                            onClick={
                            ()=>{this.setState({"clicked": !this.state.clicked})}
                            }
                        >
                            {info.title}
                        </li>
                        {this.props.children.subData && this.state.clicked && <DisplayState children={this.props.children.subData} data={this.props.data} filter={info.id}/>}
                        </div>
                    )
                }
            )
        )
    }
}

// class DisplayState extends Component {
//     render() {
//         // console.log(this.props.data)
//         return (
//             <table border="2">
//                 <tr>
//                     <th>Users</th>
//                     <th>Tasks</th>
//                 </tr>
                
//                 {
//                    map(this.props.data.users, (user) => {
//                     // console.log(this.props.data.tasks)

//                        return(
//                             <tr>
//                                 <td>{user.title}</td>
//                                 <td>
//                                     {
//                                         map(filter(this.props.data.tasks, {"parentId": user.id}), 
//                                         (task) => {
//                                             return(
//                                                 <tr><td>{task.title}</td>
//                                                 {   
//                                                     map(filter(this.props.data.subTasks, {"parentId": task.id}), 
//                                                     (subTask) => {
//                                                         return(
//                                                             <tr><td>{subTask.title}</td></tr>
//                                                         )
//                                                     })
//                                                 }
//                                                 </tr>
//                                             )
//                                         })
//                                     }
//                                 </td>
//                             </tr>
//                        )
//                    }) 
//                 }
                
//             </table>
//         )
//     }
// }


const mapStateToProps = state => {

    return {
        data: state
    }
}

export default connect(mapStateToProps)(DisplayState)
