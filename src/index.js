import React from "react"
import ReactDOM from "react-dom/client"
import {Provider} from "react-redux"
import {Route, Switch} from "react-router-dom"
import {ConnectedRouter} from "connected-react-router"
import HomePage from "./pages/home/home"
import LatestNews from "./pages/latest-news/latest-news"
import PopularNews from "./pages/popular-news/popular-news"
import "./index.css"
import App from "./App"

import store from "./redux/store"
import {history} from "./redux/root-reducer"

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App>
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/latest-news" exact>
              <LatestNews />
            </Route>
            <Route path="/popular-news" exact>
              <PopularNews />
            </Route>
          </Switch>
        </App>
      </ConnectedRouter>
    </Provider>
  </React.StrictMode>
)
