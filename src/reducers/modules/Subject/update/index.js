import axios from "axios";
import {
  SET_SUBJECTS_UPDATE_ITEM,
  SET_SUBJECTS_UPDATE_IS_LOADING,
  SET_SUBJECTS_UPDATE_IS_UPDATE,
  SET_SUBJECTS_UPDATE_MESSAGE,

} from "../mutation";

export const updateSubject = (item) => {
  return (dispatch) => {
    dispatch({ type: SET_SUBJECTS_UPDATE_IS_LOADING, payload: true });

    return axios
      .post(`${process.env.REACT_APP_BACKEND_SOURCE}/subject/${item.id}`,item)
      .then(({data}) => {
        dispatch({ type: SET_SUBJECTS_UPDATE_IS_LOADING, payload: false });
        dispatch({ type: SET_SUBJECTS_UPDATE_IS_UPDATE, payload: true });
        dispatch({ type: SET_SUBJECTS_UPDATE_ITEM, payload: data });
        dispatch({ type: SET_SUBJECTS_UPDATE_MESSAGE, payload: "Subject is update" });
      })
      .catch((err) => {
        dispatch({ type: SET_SUBJECTS_UPDATE_IS_UPDATE, payload: false });
        dispatch({ type: SET_SUBJECTS_UPDATE_IS_LOADING, payload: false });
        dispatch({ type: SET_SUBJECTS_UPDATE_ITEM, payload: {} });
        dispatch({ type: SET_SUBJECTS_UPDATE_MESSAGE, payload: "Subject not update" });
      });
  };
};
