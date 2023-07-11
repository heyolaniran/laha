import axios from "axios";
import {
  SET_USER_REPETS_DELETE_IS_LOADING,
  SET_USER_REPETS_DELETE_IS_DELETE,
  SET_USER_REPETS_DELETE_ITEM,
  SET_USER_REPETS_DELETE_MESSAGE,
  SET_USER_REPETS_DELETE_RESET,
} from "./mutation";

export const deleteUserRepet = (id) => {
  return (dispatch) => {
    dispatch({type:SET_USER_REPETS_DELETE_RESET})
    dispatch({ type: SET_USER_REPETS_DELETE_IS_LOADING, payload: true });

    return axios
      .delete(`${process.env.REACT_APP_BACKEND_SOURCE}/repetition-courses/program/${id}`)
      .then((res) => {
        dispatch({ type: SET_USER_REPETS_DELETE_IS_LOADING, payload: false });
        dispatch({ type: SET_USER_REPETS_DELETE_IS_DELETE, payload: true });
        dispatch({ type: SET_USER_REPETS_DELETE_ITEM, payload: res.data });
        dispatch({ type: SET_USER_REPETS_DELETE_MESSAGE, payload: "UserRepet is delete" });
      })
      .catch((err) => {
        dispatch({ type: SET_USER_REPETS_DELETE_IS_LOADING, payload: false });
        dispatch({ type: SET_USER_REPETS_DELETE_IS_DELETE, payload: false });
        dispatch({ type: SET_USER_REPETS_DELETE_MESSAGE, payload: err.message });
      });
  };
};
