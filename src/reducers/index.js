import { combineReducers } from "redux";
import { reducerNames } from "./reducerNames";
import { reduce, get, omit } from "lodash";
import { data } from "../Data/Data";

const setData = (state, action) => {
  return {
    ...state,
    [action.newID]: {
      title: action.payload,
      id: action.newID,
      description: action.description,
      done: action.done,
      parentId: action.id
    }
  };
};

const getData = name => {
  let state = {};
  data
    .get(name)
    .map()
    .on(function(object, id) {
      state = { ...state, [id]: omit(object, "_") };
    });
  return state;
};

export const buildReducer = () => {
  const out = reduce(
    reducerNames,
    (result, name) => {
      const handlers = {
        [`setData_${name}`]: setData
      };
      result[name] = (state = getData(name), action) => {
        return get(handlers, action.type, d => d)(state, action);
      };
      return result;
    },
    {}
  );
  return out;
};

export const rootReducer = combineReducers(buildReducer());
