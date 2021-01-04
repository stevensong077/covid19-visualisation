import { all, put, takeLatest } from "redux-saga/effects";
import { getData } from "../../apis/dataApi";
import actions from "./actions";
import { toast } from "react-toastify";

function* getDataList() {
  const { success, data, error, testJSON } = yield getData();
  if (success) {
    yield put({ type: actions.GET_DATA_SUCCESS, payload: data });
  } else {
    yield put({ type: actions.GET_DATA_FAIL });
    toast.error(error.message, { autoClose: 4000 });
  }
}

export default function* dataSaga() {
  yield all([takeLatest(actions.GET_DATA, getDataList)]);
}
