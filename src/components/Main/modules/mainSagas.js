import { takeEvery, put, call, select } from "redux-saga-effects";
import MainApi from "./mainApi";

export const getSelectedChannel = state => state.main.selectedValue;
function* fetchData(action) {
  try {
    const data = yield call(MainApi.get);
    if (data) {
      yield put({ type: "GET_CHANNELS_RESULT", data });
    }
  } catch (e) {
    console.log("Error" + e);
  }
}
function* postData(action) {
  try {
    const ch = yield select(getSelectedChannel);
    const val = yield call(MainApi.post, ch);
    if (val) {
      yield put({ type: "POST_CHANNELS_RESULT", val });
    }
  } catch (e) {
    console.log("Error" + e);
  }
}

function* watchsaga() {
  yield takeEvery("GET_CHANNELS", fetchData);
  yield takeEvery("POST_CHANNELS", postData);
}
export const mainSagas = [watchsaga()];
