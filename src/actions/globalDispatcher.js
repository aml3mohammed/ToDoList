export const globalDispatcher = dispatch => {
  return {
    add: (app, id, newTitle, description, done, newID) => {
      dispatch({
        type: `setData_${app}`,
        payload: newTitle,
        id,
        description,
        done,
        newID
      });
    }
  };
};
