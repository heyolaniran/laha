import axios from "axios";
import {
  SET_SUBJECTS_CREATE_IS_LOADING,
  SET_SUBJECTS_CREATE_MESSAGE,
  SET_SUBJECTS_CREATE_IS_CREATE,
  SET_SUBJECTS_CREATE_ITEM,
} from "./mutation";

export const createSubject = (item) => {
  return (dispatch) => {
    dispatch({ type: SET_SUBJECTS_CREATE_IS_LOADING, payload: true });
    return axios.get(`${process.env.REACT_APP_SANCTUM}/sanctum/csrf-cookie`).then((response) => {
            return axios
            .post(`${process.env.REACT_APP_BACKEND_SOURCE}/subject`,item)
            .then(({data}) => {
              dispatch({ type: SET_SUBJECTS_CREATE_IS_LOADING, payload: false });
              dispatch({ type: SET_SUBJECTS_CREATE_IS_CREATE, payload: true });
              dispatch({ type: SET_SUBJECTS_CREATE_ITEM, payload: data });
              dispatch({ type: SET_SUBJECTS_CREATE_MESSAGE, payload: "Subject is create" });
            })
            .catch((err) => {
              dispatch({ type: SET_SUBJECTS_CREATE_IS_LOADING, payload: false });
              dispatch({ type: SET_SUBJECTS_CREATE_MESSAGE, payload: err.message });
            });
      
    })
  };
};
