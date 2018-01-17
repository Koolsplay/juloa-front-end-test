import { combineReducers } from "redux"
import { items, itemsHasErrored, itemsIsLoading, showProductDetails } from "./items"
import { routerReducer } from 'react-router-redux'

export default combineReducers({
  items,
  itemsHasErrored,
  itemsIsLoading,
  showProductDetails,
  routing: routerReducer
});
