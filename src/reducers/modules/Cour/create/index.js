import axios from "axios";
import {
  SET_COURS_CREATE_IS_LOADING,
  SET_COURS_CREATE_MESSAGE,
  SET_COURS_CREATE_IS_CREATE,
  SET_COURS_CREATE_ITEM,
} from "./mutation";

export const createCour = (item) => {
  return (dispatch) => {
    dispatch({ type: SET_COURS_CREATE_IS_LOADING, payload: true });

    return axios
      .post(`${process.env.REACT_APP_API_URL}/cours`,item)
      .then(({data}) => {
        dispatch({ type: SET_COURS_CREATE_IS_LOADING, payload: false });
        dispatch({ type: SET_COURS_CREATE_IS_CREATE, payload: true });
        dispatch({ type: SET_COURS_CREATE_ITEM, payload: data });
        dispatch({ type: SET_COURS_CREATE_MESSAGE, payload: "Cour is create" });
      })
      .catch((err) => {
        dispatch({ type: SET_COURS_CREATE_IS_LOADING, payload: false });
        dispatch({ type: SET_COURS_CREATE_MESSAGE, payload: err.message });
      });
  };
};
