import axios from "axios";
import {
  SET_SOUSTITRES_DELETE_IS_LOADING,
  SET_SOUSTITRES_DELETE_IS_DELETE,
  SET_SOUSTITRES_DELETE_ITEM,
  SET_SOUSTITRES_DELETE_MESSAGE,
  SET_SOUSTITRES_DELETE_RESET,
} from "./mutation";

export const deleteSousTitre = (id) => {
  return (dispatch) => {
    dispatch({ type: SET_SOUSTITRES_DELETE_IS_LOADING, payload: true });

    return axios
      .delete(`${process.env.REACT_APP_BACKEND_SOURCE}/sous_titres/${id}`)
      .then((res) => {
        dispatch({ type: SET_SOUSTITRES_DELETE_IS_LOADING, payload: false });
        dispatch({ type: SET_SOUSTITRES_DELETE_IS_DELETE, payload: true });
        dispatch({ type: SET_SOUSTITRES_DELETE_ITEM, payload: res.data });
        dispatch({ type: SET_SOUSTITRES_DELETE_MESSAGE, payload: "SousTitre is delete" });
      })
      .catch((err) => {
        dispatch({ type: SET_SOUSTITRES_DELETE_IS_LOADING, payload: false });
        dispatch({ type: SET_SOUSTITRES_DELETE_IS_DELETE, payload: false });
        dispatch({ type: SET_SOUSTITRES_DELETE_MESSAGE, payload: err.message });
      });
  };
};
