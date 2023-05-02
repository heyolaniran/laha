import axios from "axios";
import {
  SET_SOUSTITRES_UPDATE_ITEM,
  SET_SOUSTITRES_UPDATE_IS_LOADING,
  SET_SOUSTITRES_UPDATE_IS_UPDATE,
  SET_SOUSTITRES_UPDATE_MESSAGE,

} from "./mutation";

export const updateSousTitre = (item) => {
  return (dispatch) => {
    dispatch({ type: SET_SOUSTITRES_UPDATE_IS_LOADING, payload: true });

    return axios
      .put(`${process.env.REACT_APP_API_URL}/sous_titres/${item.id}`,item)
      .then(({data}) => {
        dispatch({ type: SET_SOUSTITRES_UPDATE_IS_LOADING, payload: false });
        dispatch({ type: SET_SOUSTITRES_UPDATE_IS_UPDATE, payload: true });
        dispatch({ type: SET_SOUSTITRES_UPDATE_ITEM, payload: data });
        dispatch({ type: SET_SOUSTITRES_UPDATE_MESSAGE, payload: "SousTitre is update" });
      })
      .catch((err) => {
        dispatch({ type: SET_SOUSTITRES_UPDATE_IS_UPDATE, payload: false });
        dispatch({ type: SET_SOUSTITRES_UPDATE_IS_LOADING, payload: false });
        dispatch({ type: SET_SOUSTITRES_UPDATE_ITEM, payload: {} });
        dispatch({ type: SET_SOUSTITRES_UPDATE_MESSAGE, payload: "SousTitre not update" });
      });
  };
};
