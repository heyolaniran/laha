import axios from "axios";
import {
  SET_SOUSTITRES_CREATE_IS_LOADING,
  SET_SOUSTITRES_CREATE_MESSAGE,
  SET_SOUSTITRES_CREATE_IS_CREATE,
  SET_SOUSTITRES_CREATE_ITEM,
} from "./mutation";

export const createSousTitre = (item) => {
  return (dispatch) => {
    dispatch({ type: SET_SOUSTITRES_CREATE_IS_LOADING, payload: true });

    return axios
      .post(`${process.env.REACT_APP_BACKEND_SOURCE}/sous_titres`,item)
      .then(({data}) => {
        dispatch({ type: SET_SOUSTITRES_CREATE_IS_LOADING, payload: false });
        dispatch({ type: SET_SOUSTITRES_CREATE_IS_CREATE, payload: true });
        dispatch({ type: SET_SOUSTITRES_CREATE_ITEM, payload: data });
        dispatch({ type: SET_SOUSTITRES_CREATE_MESSAGE, payload: "SousTitre is create" });
      })
      .catch((err) => {
        dispatch({ type: SET_SOUSTITRES_CREATE_IS_LOADING, payload: false });
        dispatch({ type: SET_SOUSTITRES_CREATE_MESSAGE, payload: err.message });
      });
  };
};
