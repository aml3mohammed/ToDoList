import uuid from "uuid/v4";
import { map } from "lodash";
import Gun from "gun/gun";

const arr = new Array(5);
export const ids = map(arr, id => {
  return uuid();
});

var gun = Gun();

const table = {
  users: {
    [ids[0]]: { title: "Aml", id: ids[0], display: true },

    [ids[1]]: { title: "Aya", id: ids[1], display: true },

    [ids[2]]: { title: "Mai", id: ids[2], display: true },

    [ids[3]]: { title: "Bassant", id: ids[3], display: true },

    [ids[4]]: { title: "Ghada", id: ids[4], display: true }
  },

  tasks: {},

  subTasks: {}
};

export const data = gun.get("data").once(obj => {
  if (!obj) {
    return gun.get("data").put(table);
  }
});
