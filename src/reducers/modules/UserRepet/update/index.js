import axios from "axios";
import {
  SET_USER_REPETS_UPDATE_ITEM,
  SET_USER_REPETS_UPDATE_IS_LOADING,
  SET_USER_REPETS_UPDATE_IS_UPDATE,
  SET_USER_REPETS_UPDATE_MESSAGE,

} from "./mutation";

export const updateUserRepet = (item) => {
  return (dispatch) => {
    dispatch({ type: SET_USER_REPETS_UPDATE_IS_LOADING, payload: true });

    return axios
      .put(`${process.env.BACKEND_SOURCE}/userRepets/${item.id}`,item)
      .then(({data}) => {
        dispatch({ type: SET_USER_REPETS_UPDATE_IS_LOADING, payload: false });
        dispatch({ type: SET_USER_REPETS_UPDATE_IS_UPDATE, payload: true });
        dispatch({ type: SET_USER_REPETS_UPDATE_ITEM, payload: data });
        dispatch({ type: SET_USER_REPETS_UPDATE_MESSAGE, payload: "UserRepet is update" });
      })
      .catch((err) => {
        dispatch({ type: SET_USER_REPETS_UPDATE_IS_UPDATE, payload: false });
        dispatch({ type: SET_USER_REPETS_UPDATE_IS_LOADING, payload: false });
        dispatch({ type: SET_USER_REPETS_UPDATE_ITEM, payload: {} });
        dispatch({ type: SET_USER_REPETS_UPDATE_MESSAGE, payload: "UserRepet not update" });
      });
  };
};
