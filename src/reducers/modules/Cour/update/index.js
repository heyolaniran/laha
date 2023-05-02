import axios from "axios";
import {
  SET_COURS_UPDATE_ITEM,
  SET_COURS_UPDATE_IS_LOADING,
  SET_COURS_UPDATE_IS_UPDATE,
  SET_COURS_UPDATE_MESSAGE,

} from "./mutation";

export const updateCour = (item) => {
  return (dispatch) => {
    dispatch({ type: SET_COURS_UPDATE_IS_LOADING, payload: true });

    return axios
      .put(`${process.env.REACT_APP_API_URL}/cours/${item.id}`,item)
      .then(({data}) => {
        dispatch({ type: SET_COURS_UPDATE_IS_LOADING, payload: false });
        dispatch({ type: SET_COURS_UPDATE_IS_UPDATE, payload: true });
        dispatch({ type: SET_COURS_UPDATE_ITEM, payload: data });
        dispatch({ type: SET_COURS_UPDATE_MESSAGE, payload: "Cour is update" });
      })
      .catch((err) => {
        dispatch({ type: SET_COURS_UPDATE_IS_UPDATE, payload: false });
        dispatch({ type: SET_COURS_UPDATE_IS_LOADING, payload: false });
        dispatch({ type: SET_COURS_UPDATE_ITEM, payload: {} });
        dispatch({ type: SET_COURS_UPDATE_MESSAGE, payload: "Cour not update" });
      });
  };
};
export const updateCourPatch = (item) => {
  return (dispatch) => {
    dispatch({ type: SET_COURS_UPDATE_IS_LOADING, payload: true });

    return axios
      .patch(`${process.env.REACT_APP_API_URL}/cours/${item.id}`,item)
      .then(({data}) => {
        dispatch({ type: SET_COURS_UPDATE_IS_LOADING, payload: false });
        dispatch({ type: SET_COURS_UPDATE_IS_UPDATE, payload: true });
        dispatch({ type: SET_COURS_UPDATE_ITEM, payload: data });
        dispatch({ type: SET_COURS_UPDATE_MESSAGE, payload: "Cour is update" });
      })
      .catch((err) => {
        dispatch({ type: SET_COURS_UPDATE_IS_UPDATE, payload: false });
        dispatch({ type: SET_COURS_UPDATE_IS_LOADING, payload: false });
        dispatch({ type: SET_COURS_UPDATE_ITEM, payload: {} });
        dispatch({ type: SET_COURS_UPDATE_MESSAGE, payload: "Cour not update" });
      });
  };
};
