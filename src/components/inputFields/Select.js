import React, { Component } from 'react';
import { connect } from 'react-redux';
import { map } from 'lodash';


class select extends Component {
    
    render() {
        let state = this.props.data
        const {input, field} = this.props
        // console.log(this.props.data)
        // console.log(this.props.stateData)
        return (
            <select {...field} {...input}>
                {
                    map(state[this.props.stateData], (data) => {
                        return(
                            <option value={data.id}>{data.title}</option>
                        )
                    })
                }
            </select>
        )
    }
}


const mapStateToProps = state => {

    return {
        data: state
    }
}

export const Select = connect(mapStateToProps)(select)
