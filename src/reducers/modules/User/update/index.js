import axios from "axios";
import {
  SET_USERS_UPDATE_ITEM,
  SET_USERS_UPDATE_IS_LOADING,
  SET_USERS_UPDATE_IS_UPDATE,
  SET_USERS_UPDATE_MESSAGE,

} from "../mutation";

export const updateUser = (item) => {
  return (dispatch) => {
    dispatch({ type: SET_USERS_UPDATE_IS_LOADING, payload: true });

    return axios
      .post(`${process.env.REACT_APP_API_URL}/users/${item.id}`,item)
      .then(({data}) => {
        dispatch({ type: SET_USERS_IS_LOADING, payload: false });
        dispatch({ type: SET_USERS_UPDATE_IS_UPDATE, payload: true });
        dispatch({ type: SET_USERS_UPDATE_ITEM, payload: data });
        dispatch({ type: SET_USERS_MESSAGE, payload: "User is update" });
      })
      .catch((err) => {
        dispatch({ type: SET_USERS_UPDATE_IS_UPDATE, payload: false });
        dispatch({ type: SET_USERS_UPDATE_IS_LOADING, payload: false });
        dispatch({ type: SET_USERS_UPDATE_ITEM, payload: {} });
        dispatch({ type: SET_USERS_MESSAGE, payload: "User not update" });
      });
  };
};
