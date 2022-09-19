import {spawn, call, all} from "redux-saga/effects"
import loadNewsData from "./news/new-sagas"

export default function* rootSaga() {
  const sagas = [loadNewsData]

  const retrySagas = yield sagas.map((saga) => {
    return spawn(function* () {
      while (true) {
        try {
          yield call(saga)
          break
        } catch (e) {
          console.log(e)
        }
      }
    })
  })
  yield all(retrySagas)
}
