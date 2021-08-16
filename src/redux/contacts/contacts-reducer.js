import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
//import action from "./contacts-actions";
import {
  addContactsRequest,
  addContactsSuccess,
  addContactsError,
  deleteContactsRequest,
  deleteContactsSuccess,
  deleteContactsError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  changeFilter,
} from "./contacts-actions";

const items = createReducer([], {
  [fetchContactsSuccess]: (_, payload) => payload,
  [addContactsSuccess]: (state, { payload }) => [payload, ...state],
  [deleteContactsSuccess]: (state, { payload }) =>
    state.filter(({ name }) => name === payload),
});

console.log(items);

const loading = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,

  [addContactsRequest]: () => true,
  [addContactsSuccess]: () => false,
  [addContactsError]: () => false,

  [deleteContactsRequest]: () => true,
  [deleteContactsSuccess]: () => false,
  [deleteContactsError]: () => false,
});

const filter = createReducer("", {
  [changeFilter]: (_, { payload }) => payload,
});

const error = createReducer(null, {});

export default combineReducers({
  items,
  filter,
  loading,
  error,
});
