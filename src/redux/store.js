import {createStore, applyMiddleware} from "redux"
import thunk from "redux-thunk"
import createSagaMiddleware from "redux-saga"
import {composeWithDevTools} from "@redux-devtools/extension"
import rootReducer from "./root-reducer"
import rootSaga from "./sagas"

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, sagaMiddleware))
)

sagaMiddleware.run(rootSaga)

export default store
