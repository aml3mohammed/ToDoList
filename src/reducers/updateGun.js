import { data } from "../Data/Data";
import uuid from "uuid/v4";

export const updateGun = (that, app, id, newTitle, description, done) => {
  let newID = uuid();
  data.get(app).put({
    [newID]: {
      title: newTitle,
      id: newID,
      description: description,
      done: done,
      parentId: id
    }
  });
  data.map().on(() => {
    that.props.add(app, id, newTitle, description, done, newID);
  });
};
