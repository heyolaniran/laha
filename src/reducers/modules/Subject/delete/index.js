import axios from "axios";
import {
  SET_SUBJECTS_DELETE_IS_LOADING,
  SET_SUBJECTS_DELETE_IS_DELETE,
  SET_SUBJECTS_DELETE_ITEM,
  SET_SUBJECTS_DELETE_MESSAGE,
  SET_SUBJECTS_DELETE_RESET,
} from "./mutation";

export const deleteSubject = (id) => {
  return (dispatch) => {
    dispatch({ type: SET_SUBJECTS_DELETE_IS_LOADING, payload: true });

    return axios
      .delete(`${process.env.REACT_APP_API_URL}/subjects/${id}`)
      .then((res) => {
        dispatch({ type: SET_SUBJECTS_DELETE_IS_LOADING, payload: false });
        dispatch({ type: SET_SUBJECTS_DELETE_IS_DELETE, payload: true });
        dispatch({ type: SET_SUBJECTS_DELETE_ITEM, payload: res.data });
        dispatch({ type: SET_SUBJECTS_DELETE_MESSAGE, payload: "Subject is delete" });
      })
      .catch((err) => {
        dispatch({ type: SET_SUBJECTS_DELETE_IS_LOADING, payload: false });
        dispatch({ type: SET_SUBJECTS_DELETE_IS_DELETE, payload: false });
        dispatch({ type: SET_SUBJECTS_DELETE_MESSAGE, payload: err.message });
      });
  };
};
