export const functions = taskid => ({
  key: "filtering",
  path: "subTasks",
  params: {
    parentId: taskid
  },
  then: {
    key: "count",
    count_key: "",
    start: 0
  }
});
