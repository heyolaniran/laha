import axios from "axios";
import {
  SET_CLASSROOMS_DELETE_IS_LOADING,
  SET_CLASSROOMS_DELETE_IS_DELETE,
  SET_CLASSROOMS_DELETE_ITEM,
  SET_CLASSROOMS_DELETE_MESSAGE,
  SET_CLASSROOMS_DELETE_RESET,
} from "./mutation";

export const deleteClassroom = (id) => {
  return (dispatch) => {
    dispatch({ type: SET_CLASSROOMS_DELETE_IS_LOADING, payload: true });

    return axios
      .delete(`${process.env.REACT_APP_API_URL}/classrooms/${id}`)
      .then((res) => {
        dispatch({ type: SET_CLASSROOMS_DELETE_IS_LOADING, payload: false });
        dispatch({ type: SET_CLASSROOMS_DELETE_IS_DELETE, payload: true });
        dispatch({ type: SET_CLASSROOMS_DELETE_ITEM, payload: res.data });
        dispatch({ type: SET_CLASSROOMS_DELETE_MESSAGE, payload: "Classroom is delete" });
      })
      .catch((err) => {
        dispatch({ type: SET_CLASSROOMS_DELETE_IS_LOADING, payload: false });
        dispatch({ type: SET_CLASSROOMS_DELETE_IS_DELETE, payload: false });
        dispatch({ type: SET_CLASSROOMS_DELETE_MESSAGE, payload: err.message });
      });
  };
};
