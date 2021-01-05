import { all } from "redux-saga/effects";

import dataSaga from "./data/saga";

export default function* rootSaga(/** getState */) {
  yield all([dataSaga()]);
}
