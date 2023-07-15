import axios from "axios";
import {
  SET_SUBJECTS_LIST_ITEMS,
  SET_SUBJECTS_LIST_META,
  SET_SUBJECTS_LIST_LINKS,
  SET_SUBJECTS_LIST_MESSAGE,
  SET_SUBJECTS_LIST_IS_LOADING,
  SET_SUBJECTS_LIST_RESET
} from "./mutation";

export const getSubjects = (pagination = false) => {
  return (dispatch) => {
    dispatch({ type: SET_SUBJECTS_LIST_IS_LOADING, payload: true });
    return axios
      .get(
        `${process.env.REACT_APP_BACKEND_SOURCE}/subject`
      )
      .then(({data}) => {
        dispatch({ type: SET_SUBJECTS_LIST_ITEMS, payload: data });
        dispatch({ type: SET_SUBJECTS_LIST_IS_LOADING, payload: false });
        dispatch({ type: SET_SUBJECTS_LIST_META, payload: [] });
        dispatch({ type: SET_SUBJECTS_LIST_LINKS, payload: [] });
        dispatch({ type: SET_SUBJECTS_LIST_MESSAGE, payload: "Liste des livres" });
      })
      .catch((err) => {
        dispatch({ type: SET_SUBJECTS_LIST_IS_LOADING, payload: true });
        dispatch({ type: SET_SUBJECTS_LIST_ITEMS, payload: [] });
        dispatch({ type: SET_SUBJECTS_LIST_MESSAGE, payload: err.message });
      });
  };
};

export const getSubject = (id) => {
  return (dispatch) => {
    dispatch({ type: SET_SUBJECTS_LIST_IS_LOADING, payload: true });

    return axios
      .get(`${process.env.REACT_APP_BACKEND_SOURCE}/subjects/${id}`)
      .then(({data}) => {
        dispatch({ type: SET_SUBJECTS_LIST_ITEMS, payload: data });
        dispatch({ type: SET_SUBJECTS_LIST_IS_LOADING, payload: false });
        dispatch({ type: SET_SUBJECTS_LIST_META, payload: [] });
        dispatch({ type: SET_SUBJECTS_LIST_LINKS, payload: [] });
        dispatch({ type: SET_SUBJECTS_LIST_MESSAGE, payload: "Liste des livres" });
      })
      .catch((err) => {
        dispatch({ type: SET_SUBJECTS_LIST_IS_LOADING, payload: true });
        dispatch({ type: SET_SUBJECTS_LIST_ITEMS, payload: [] });
        dispatch({ type: SET_SUBJECTS_LIST_MESSAGE, payload: err.message });
      });
  };
};

export const resetSubjects = () => {
  return (dispatch) => {
    dispatch({ type: SET_SUBJECTS_LIST_RESET, payload: true });
  };
};
