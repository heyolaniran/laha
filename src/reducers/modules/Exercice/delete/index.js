import axios from "axios";
import {
  SET_EXERCICES_DELETE_IS_LOADING,
  SET_EXERCICES_DELETE_IS_DELETE,
  SET_EXERCICES_DELETE_ITEM,
  SET_EXERCICES_DELETE_MESSAGE,
  SET_EXERCICES_DELETE_RESET,
} from "./mutation";

export const deleteExercice = (id) => {
  return (dispatch) => {
    dispatch({ type: SET_EXERCICES_DELETE_IS_LOADING, payload: true });
    return axios.get(`${process.env.REACT_APP_SANCTUM}/sanctum/csrf-cookie`).then((response) => {
          return axios
          .delete(`${process.env.REACT_APP_BACKEND_SOURCE}/exercices/${id}`)
          .then((res) => {
            dispatch({ type: SET_EXERCICES_DELETE_IS_LOADING, payload: false });
            dispatch({ type: SET_EXERCICES_DELETE_IS_DELETE, payload: true });
            dispatch({ type: SET_EXERCICES_DELETE_ITEM, payload: res.data });
            dispatch({ type: SET_EXERCICES_DELETE_MESSAGE, payload: "Exercice is delete" });
          })
          .catch((err) => {
            dispatch({ type: SET_EXERCICES_DELETE_IS_LOADING, payload: false });
            dispatch({ type: SET_EXERCICES_DELETE_IS_DELETE, payload: false });
            dispatch({ type: SET_EXERCICES_DELETE_MESSAGE, payload: err.message });
          });
    
    })
  };
};
