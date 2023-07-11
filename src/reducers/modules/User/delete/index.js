import axios from "axios";
import {
  SET_USERS_DELETE_IS_LOADING,
  SET_USERS_DELETE_IS_DELETE,
  SET_USERS_DELETE_ITEM,
  SET_USERS_DELETE_MESSAGE,
  SET_USERS_DELETE_RESET,
} from "./mutation";

export const deleteUser = (id) => {
  return (dispatch) => {
    dispatch({ type: SET_USERS_DELETE_IS_LOADING, payload: true });

    return axios
      .delete(`${process.env.REACT_APP_BACKEND_SOURCE}/users/${id}`)
      .then((res) => {
        dispatch({ type: SET_USERS_DELETE_IS_LOADING, payload: false });
        dispatch({ type: SET_USERS_DELETE_IS_DELETE, payload: true });
        dispatch({ type: SET_USERS_DELETE_ITEM, payload: res.data });
        dispatch({ type: SET_USERS_DELETE_MESSAGE, payload: "User is delete" });
      })
      .catch((err) => {
        dispatch({ type: SET_USERS_DELETE_IS_LOADING, payload: false });
        dispatch({ type: SET_USERS_DELETE_IS_DELETE, payload: false });
        dispatch({ type: SET_USERS_DELETE_MESSAGE, payload: err.message });
      });
  };
};
