import React from 'react';
import { Formik, Form } from 'formik';
import { connect } from 'react-redux';
import fields from '../fields/fields';
import { omit } from 'lodash';
import Controller from './index';
import DisplayState from './DisplayState';
import ModalAndCount from './ModalAndCount';
import { globalDispatcher } from '../actions/globalDispatcher';
import { updateGun } from '../reducers/updateGun';
import { display } from '../display/display';

let v 

class ToDo extends React.Component {
    render(){
        return(  
            <div>
                <Formik
                    initialValues={{
                        users:"",
                        title:"",
                        description:"",
                        done:false
                    }}
                    onSubmit = {values => {
                        updateGun(this, "tasks", values.users, values.title, values.description, values.done)
                        v = values.title
                    }}
                    render={(props) => (
                        <div>
                            <Form>   
                                <Controller fields={omit(fields, "tasks")} stateData="users"/>
                                <button type="submit">Add Task</button>  
                                <br/>
                            </Form>
                            <ModalAndCount title={v}/>               
                            <DisplayState children={display} filter={true}/>
                        </div>
                        
                    )}
                />
                
                
                
            </div>
                 
        )
    }
}


const mapStateToProps = state => {
    return {
        data: state
    }
}



export default connect(mapStateToProps, globalDispatcher)(ToDo)
