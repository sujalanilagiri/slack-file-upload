import { all } from "redux-saga/effects";
import { mainSagas } from "../components/Main/modules/mainSagas";

export default function* sagas() {
  yield all([...mainSagas]);
}
