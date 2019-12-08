import React from 'react';
import FieldCreator from './inputFields/FieldCreator';

 
export default class Controller extends React.Component {
    render() {
        return(
            <FieldCreator fields={this.props.fields} stateData={this.props.stateData}/>
        )
    }
}