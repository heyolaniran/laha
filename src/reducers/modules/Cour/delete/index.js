import axios from "axios";
import {
  SET_COURS_DELETE_IS_LOADING,
  SET_COURS_DELETE_IS_DELETE,
  SET_COURS_DELETE_ITEM,
  SET_COURS_DELETE_MESSAGE,
  SET_COURS_DELETE_RESET,
} from "./mutation";

export const deleteCour = (id) => {
  return (dispatch) => {
    dispatch({ type: SET_COURS_DELETE_IS_LOADING, payload: true });

    return axios
      .delete(`${process.env.REACT_APP_BACKEND_SOURCE}/cours/${id}`)
      .then((res) => {
        dispatch({ type: SET_COURS_DELETE_IS_LOADING, payload: false });
        dispatch({ type: SET_COURS_DELETE_IS_DELETE, payload: true });
        dispatch({ type: SET_COURS_DELETE_ITEM, payload: res.data });
        dispatch({ type: SET_COURS_DELETE_MESSAGE, payload: "Cour is delete" });
      })
      .catch((err) => {
        dispatch({ type: SET_COURS_DELETE_IS_LOADING, payload: false });
        dispatch({ type: SET_COURS_DELETE_IS_DELETE, payload: false });
        dispatch({ type: SET_COURS_DELETE_MESSAGE, payload: err.message });
      });
  };
};
