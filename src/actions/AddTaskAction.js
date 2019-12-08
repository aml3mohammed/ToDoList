import { ADD_TASK } from '../types/types';
import uuid from 'uuid/v4';


export const addTask = (id, newTask, description, done) => {
  return{
    type: ADD_TASK,
    payload: newTask,
    id, 
    description,
    done,
    newID:uuid()
  }
}
