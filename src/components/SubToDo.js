import React from 'react';
import { Formik, Form } from 'formik';
import { connect } from 'react-redux';
import fields from '../fields/fields';
import { omit } from 'lodash';
import Controller from './index';
import { apply } from '../apply/index';
import { functions } from '../apply/functions';
import { globalDispatcher } from '../actions/globalDispatcher';
import { updateGun } from '../reducers/updateGun';


class SubToDo extends React.Component {
    render(){
        let counter = apply(functions(this.props.id))
        return(  
            <Formik
                initialValues={{
                    title:"",
                    description:"",
                    done:false
                }}
                onSubmit = {values => {
                    updateGun(this, "subTasks", this.props.id, values.title, values.description, values.done)
                }}
                render={
                    (props) => (
                    <Form>   
                        <h2>Add a sub task to "{this.props.data.tasks[this.props.id].title}" task</h2>
                        <h3>Number of sub-taskes in this task is {counter}</h3>
                        <Controller fields={omit(fields, ["users", "tasks"])}/>
                        <button type="submit">Add Sub Task</button> 
                    </Form>
                )}
            />
                 
        )
    }
}


const mapStateToProps = state => {

    return {
        data: state
    }
}


export default connect(mapStateToProps, globalDispatcher)(SubToDo)
