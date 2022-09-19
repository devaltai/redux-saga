import {
  SET_LOADING_DATA,
  SET_LATEST_NEWS_ERROR,
  SET_POPULAR_NEWS_ERROR,
  SET_LATEST_NEWS,
  SET_POPULAR_NEWS,
} from "./constants"

const initialState = {
  isDataLoading: false,
  ilatestNewsError: "",
  popularNewsError: "",
  latestNews: [],
  popularNews: [],
}

export const newReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LATEST_NEWS:
      return {
        ...state,
        latestNews: action.payload,
      }
    case SET_POPULAR_NEWS:
      return {
        ...state,
        popularNews: action.payload,
      }
    case SET_LOADING_DATA:
      return {
        ...state,
        isDataLoading: action.payload,
      }
    case SET_LATEST_NEWS_ERROR:
      return {
        ...state,
        latestNewsError: action.payload,
      }
    case SET_POPULAR_NEWS_ERROR:
      return {
        ...state,
        popularNewsError: action.payload,
      }
    default:
      return state
  }
}
