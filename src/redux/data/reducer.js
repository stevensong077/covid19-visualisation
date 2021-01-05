import actions from "./actions";

const initState = {
  datalist: [],
  isFetchingData: false,
};

export default function dataReducer(state = initState, { type, ...action }) {
  switch (type) {
    case actions.GET_DATA:
      return {
        ...state,
        isFetchingData: true,
      };
    case actions.GET_DATA_SUCCESS:
      return {
        ...state,
        isFetchingData: false,
        datalist: action.payload,
      };
    case actions.GET_DATA_FAIL:
      return {
        ...state,
        isFetchingData: false,
      };
    default:
      return state;
  }
}
