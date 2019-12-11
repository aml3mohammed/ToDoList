import { ADD_SUB_TASK } from "../types/types";
import uuid from "uuid/v4";

export const addSubTask = (id, newSubTask, description, done) => {
  return {
    type: ADD_SUB_TASK,
    payload: newSubTask,
    id,
    description,
    done,
    newID: uuid()
  };
};
