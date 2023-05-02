import axios from "axios";
import {
  SET_BOOKS_DELETE_IS_LOADING,
  SET_BOOKS_DELETE_IS_DELETE,
  SET_BOOKS_DELETE_ITEM,
  SET_BOOKS_DELETE_MESSAGE,
  SET_BOOKS_DELETE_RESET,
} from "./mutation";

export const deleteBook = (id) => {
  return (dispatch) => {
    dispatch({ type: SET_BOOKS_DELETE_IS_LOADING, payload: true });

    return axios
      .delete(`${process.env.REACT_APP_API_URL}/books/${id}`)
      .then((res) => {
        dispatch({ type: SET_BOOKS_DELETE_IS_LOADING, payload: false });
        dispatch({ type: SET_BOOKS_DELETE_IS_DELETE, payload: true });
        dispatch({ type: SET_BOOKS_DELETE_ITEM, payload: res.data });
        dispatch({ type: SET_BOOKS_DELETE_MESSAGE, payload: "Book is delete" });
      })
      .catch((err) => {
        dispatch({ type: SET_BOOKS_DELETE_IS_LOADING, payload: false });
        dispatch({ type: SET_BOOKS_DELETE_IS_DELETE, payload: false });
        dispatch({ type: SET_BOOKS_DELETE_MESSAGE, payload: err.message });
      });
  };
};
