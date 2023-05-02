import axios from "axios";
import {
  SET_EXERCICES_UPDATE_ITEM,
  SET_EXERCICES_UPDATE_IS_LOADING,
  SET_EXERCICES_UPDATE_IS_UPDATE,
  SET_EXERCICES_UPDATE_MESSAGE,

} from "./mutation";

export const updateExercice = (item) => {
  return (dispatch) => {
    dispatch({ type: SET_EXERCICES_UPDATE_IS_LOADING, payload: true });

    return axios
      .put(`${process.env.REACT_APP_API_URL}/exercices/${item.id}`,item)
      .then(({data}) => {
        dispatch({ type: SET_EXERCICES_UPDATE_IS_LOADING, payload: false });
        dispatch({ type: SET_EXERCICES_UPDATE_IS_UPDATE, payload: true });
        dispatch({ type: SET_EXERCICES_UPDATE_ITEM, payload: data });
        dispatch({ type: SET_EXERCICES_UPDATE_MESSAGE, payload: "Exercice is update" });
      })
      .catch((err) => {
        dispatch({ type: SET_EXERCICES_UPDATE_IS_UPDATE, payload: false });
        dispatch({ type: SET_EXERCICES_UPDATE_IS_LOADING, payload: false });
        dispatch({ type: SET_EXERCICES_UPDATE_ITEM, payload: {} });
        dispatch({ type: SET_EXERCICES_UPDATE_MESSAGE, payload: "Exercice not update" });
      });
  };
};
