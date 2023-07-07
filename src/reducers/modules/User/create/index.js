import axios from "axios";
import {
  SET_USERS_CREATE_IS_LOADING,
  SET_USERS_CREATE_MESSAGE,
  SET_USERS_CREATE_IS_CREATE,
  SET_USERS_CREATE_ITEM,
} from "./mutation";

export const createUser = (item) => {
  return (dispatch) => {
    dispatch({ type: SET_USERS_CREATE_IS_LOADING, payload: true });

    return axios
      .post(`${process.env.BACKEND_SOURCE}/user`,item)
      .then(({data}) => {
        dispatch({ type: SET_USERS_CREATE_IS_LOADING, payload: false });
        dispatch({ type: SET_USERS_CREATE_IS_CREATE, payload: true });
        dispatch({ type: SET_USERS_CREATE_ITEM, payload: data });
        dispatch({ type: SET_USERS_CREATE_MESSAGE, payload: "User is create" });
      })
      .catch((err) => {
        dispatch({ type: SET_USERS_CREATE_IS_LOADING, payload: false });
        dispatch({ type: SET_USERS_CREATE_MESSAGE, payload: err.message });
      });
  };
};
