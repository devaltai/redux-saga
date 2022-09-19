import {combineReducers} from "redux"
import {createBrowserHistory} from "history"
import {connectRouter} from "connected-react-router"
import {newReducer} from "./news/new-reducers"

export const history = createBrowserHistory()

export const rootReducer = combineReducers({
  news: newReducer,
  router: connectRouter(history),
})

export default rootReducer
