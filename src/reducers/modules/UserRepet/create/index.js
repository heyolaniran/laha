import axios from "axios";
import {
  SET_USER_REPETS_CREATE_IS_LOADING,
  SET_USER_REPETS_CREATE_MESSAGE,
  SET_USER_REPETS_CREATE_IS_CREATE,
  SET_USER_REPETS_CREATE_ITEM,
} from "./mutation";

export const createUserRepet = (item) => {
  return (dispatch) => {
    dispatch({ type: SET_USER_REPETS_CREATE_IS_LOADING, payload: true });

    return axios
      .post(`${process.env.REACT_APP_API_URL}/userRepets`,item)
      .then(({data}) => {
        dispatch({ type: SET_USER_REPETS_CREATE_IS_LOADING, payload: false });
        dispatch({ type: SET_USER_REPETS_CREATE_IS_CREATE, payload: true });
        dispatch({ type: SET_USER_REPETS_CREATE_ITEM, payload: data });
        dispatch({ type: SET_USER_REPETS_CREATE_MESSAGE, payload: "UserRepet is create" });
      })
      .catch((err) => {
        dispatch({ type: SET_USER_REPETS_CREATE_IS_LOADING, payload: false });
        dispatch({ type: SET_USER_REPETS_CREATE_MESSAGE, payload: err.message });
      });
  };
};
