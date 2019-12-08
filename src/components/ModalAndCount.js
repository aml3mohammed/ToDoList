import React, { Component } from 'react';
import { Formik, Form } from 'formik';
import { Modal } from 'antd';
import fields from '../fields/fields';
import Controller from './index';
import { pick } from 'lodash';
import SubToDo from './SubToDo';
import 'antd/dist/antd.css';

let id 

export default class ModalAndCount extends Component {


    state = { visible: false };

    showModal = () => {
        this.setState({
        visible: true,
        });
    };

    handleCancel = () => {
        this.setState({ visible: false });
      };

    render() {
        return (
            <div>
                <br/>
                <br/>
                <Formik
                    initialValues={{
                        tasks:""
                    }}
                    onSubmit = {values => {
                        id = values.tasks
                        this.showModal()
                    }}
                    render={(props) => (
                        <div>
                            <Form>   
                                <Controller fields={pick(fields, "tasks")} stateData="tasks"/> 
                                <button type="submit">Add SubTask</button>
                                <Modal
                                title="Add Sub-task"
                                visible={this.state.visible}
                                onCancel={this.handleCancel}
                                footer={null}
                                >
                                    <SubToDo title={this.props.title} id={id}/>
                                </Modal>    
                            </Form>
                        </div>
                        
                    )}
                />
                 
            </div>
        )
    }
}

