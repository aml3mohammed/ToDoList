export const functions = (path, params) => ({
  key: "filtering",
  path,
  params,
  then: {
    key: "count",
    count_key: "",
    start: 0
  }
});
