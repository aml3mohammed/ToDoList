import { data } from '../Data/Data';
import { ADD_SUB_TASK } from '../types/types';


export const subTaskReducer = (state = data.subTasks.data, action) => {
    let taskId = action.taskId;
    let newTitle = action.payload;
    let desc = action.description;
    let completed = action.done;
    let newID = action.newID;
    console.log("task")
    console.log(state);
    switch(action.type) {
        case ADD_SUB_TASK:
            return {
                ...state,
                [newID]: {title: newTitle, id: newID, description: desc, done: completed, taskId: taskId}
            }
        default: 
            return state;
    }
    
}

