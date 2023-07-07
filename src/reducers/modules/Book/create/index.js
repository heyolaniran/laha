import axios from "axios";
import {
  SET_BOOKS_CREATE_IS_LOADING,
  SET_BOOKS_CREATE_MESSAGE,
  SET_BOOKS_CREATE_IS_CREATE,
  SET_BOOKS_CREATE_ITEM,
} from "./mutation";

export const createBook = (item) => {
  return (dispatch) => {
    dispatch({ type: SET_BOOKS_CREATE_IS_LOADING, payload: true });

    return axios
      .post(`${process.env.BACKEND_SOURCE}/books`,item)
      .then(({data}) => {
        dispatch({ type: SET_BOOKS_CREATE_IS_LOADING, payload: false });
        dispatch({ type: SET_BOOKS_CREATE_IS_CREATE, payload: true });
        dispatch({ type: SET_BOOKS_CREATE_ITEM, payload: data });
        dispatch({ type: SET_BOOKS_CREATE_MESSAGE, payload: "Book is create" });
      })
      .catch((err) => {
        dispatch({ type: SET_BOOKS_CREATE_IS_LOADING, payload: false });
        dispatch({ type: SET_BOOKS_CREATE_MESSAGE, payload: err.message });
      });
  };
};
