const actions = {
  GET_DATA: "GET_DATA",
  GET_DATA_SUCCESS: "GET_DATA_SUCCESS",
  GET_DATA_FAIL: "GET_DATA_FAIL",

  fetchData: () => ({
    type: actions.GET_DATA,
  }),
};

export default actions