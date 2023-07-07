import axios from "axios";
import {
  SET_EXERCICES_CREATE_IS_LOADING,
  SET_EXERCICES_CREATE_MESSAGE,
  SET_EXERCICES_CREATE_IS_CREATE,
  SET_EXERCICES_CREATE_ITEM,
} from "./mutation";

export const createExercice = (item) => {
  return (dispatch) => {
    dispatch({ type: SET_EXERCICES_CREATE_IS_LOADING, payload: true });

    return axios
      .post(`${process.env.BACKEND_SOURCE}/exercices`,item)
      .then(({data}) => {
        dispatch({ type: SET_EXERCICES_CREATE_IS_LOADING, payload: false });
        dispatch({ type: SET_EXERCICES_CREATE_IS_CREATE, payload: true });
        dispatch({ type: SET_EXERCICES_CREATE_ITEM, payload: data });
        dispatch({ type: SET_EXERCICES_CREATE_MESSAGE, payload: "Exercice is create" });
      })
      .catch((err) => {
        dispatch({ type: SET_EXERCICES_CREATE_IS_LOADING, payload: false });
        dispatch({ type: SET_EXERCICES_CREATE_MESSAGE, payload: err.message });
      });
  };
};
