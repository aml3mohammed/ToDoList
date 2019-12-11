import { data } from "../Data/Data";
import { ADD_TASK } from "../types/types";

export const taskReducer = (state = data.tasks.data, action) => {
  let userId = action.id;
  let newTitle = action.payload;
  let desc = action.description;
  let completed = action.done;
  let newID = action.newID;
  console.log("task");
  console.log(state);
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        [newID]: {
          title: newTitle,
          id: newID,
          description: desc,
          done: completed,
          userId: userId
        }
      };
    default:
      return state;
  }
};
