import { filter, size } from "lodash";

export const filtering = (params, data, state, props) => {
  return filter(data, params.params);
};

export const count = (params, filteredSubTasks) => {
  return size(filteredSubTasks);
};
