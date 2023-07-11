import axios from "axios";
import {
  SET_USERS_LIST_ITEMS,
  SET_USERS_LIST_META,
  SET_USERS_LIST_LINKS,
  SET_USERS_LIST_MESSAGE,
  SET_USERS_LIST_IS_LOADING,
  SET_USERS_LIST_RESET
} from "./mutation";

export const getUsers = (pagination = false) => {
  return (dispatch) => {
    dispatch({ type: SET_USERS_LIST_IS_LOADING, payload: true });

    return axios
      .get(
        `${process.env.BACKEND_SOURCE}/users${
          pagination ? "/" : "?pagination=false"
        }`
      )
      .then(({data}) => {
        dispatch({ type: SET_USERS_LIST_ITEMS, payload: data });
        dispatch({ type: SET_USERS_LIST_IS_LOADING, payload: false });
        dispatch({ type: SET_USERS_LIST_META, payload: [] });
        dispatch({ type: SET_USERS_LIST_LINKS, payload: [] });
        dispatch({ type: SET_USERS_LIST_MESSAGE, payload: "Liste des livres" });
      })
      .catch((err) => {
        dispatch({ type: SET_USERS_LIST_IS_LOADING, payload: true });
        dispatch({ type: SET_USERS_LIST_ITEMS, payload: [] });
        dispatch({ type: SET_USERS_LIST_MESSAGE, payload: err.message });
      });
  };
};

export const getUser = (id) => {
  return (dispatch) => {
    dispatch({ type: SET_USERS_LIST_IS_LOADING, payload: true });

    return axios
      .get(`${process.env.BACKEND_SOURCE}/users/${id}`)
      .then(({data}) => {
        dispatch({ type: SET_USERS_LIST_ITEMS, payload: data });
        dispatch({ type: SET_USERS_LIST_IS_LOADING, payload: false });
        dispatch({ type: SET_USERS_LIST_META, payload: [] });
        dispatch({ type: SET_USERS_LIST_LINKS, payload: [] });
        dispatch({ type: SET_USERS_LIST_MESSAGE, payload: "Liste des livres" });
      })
      .catch((err) => {
        dispatch({ type: SET_USERS_LIST_IS_LOADING, payload: true });
        dispatch({ type: SET_USERS_LIST_ITEMS, payload: [] });
        dispatch({ type: SET_USERS_LIST_MESSAGE, payload: err.message });
      });
  };
};

export const resetUsers = () => {
  return (dispatch) => {
    dispatch({ type: SET_USERS_LIST_RESET, payload: true });
  };
};
