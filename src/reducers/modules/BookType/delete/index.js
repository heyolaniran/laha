import axios from "axios";
import {
  SET_BOOKTYPES_DELETE_IS_LOADING,
  SET_BOOKTYPES_DELETE_IS_DELETE,
  SET_BOOKTYPES_DELETE_ITEM,
  SET_BOOKTYPES_DELETE_MESSAGE,
  SET_BOOKTYPES_DELETE_RESET,
} from "./mutation";

export const deleteBookType = (id) => {
  return (dispatch) => {
    dispatch({ type: SET_BOOKTYPES_DELETE_IS_LOADING, payload: true });

    return axios
      .delete(`${process.env.REACT_APP_BACKEND_SOURCE}/bookTypes/${id}`)
      .then((res) => {
        dispatch({ type: SET_BOOKTYPES_DELETE_IS_LOADING, payload: false });
        dispatch({ type: SET_BOOKTYPES_DELETE_IS_DELETE, payload: true });
        dispatch({ type: SET_BOOKTYPES_DELETE_ITEM, payload: res.data });
        dispatch({ type: SET_BOOKTYPES_DELETE_MESSAGE, payload: "BookType is delete" });
      })
      .catch((err) => {
        dispatch({ type: SET_BOOKTYPES_DELETE_IS_LOADING, payload: false });
        dispatch({ type: SET_BOOKTYPES_DELETE_IS_DELETE, payload: false });
        dispatch({ type: SET_BOOKTYPES_DELETE_MESSAGE, payload: err.message });
      });
  };
};
