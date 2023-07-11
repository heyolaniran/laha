import axios from "axios";
import {
  SET_CLASSROOMS_CREATE_IS_LOADING,
  SET_CLASSROOMS_CREATE_MESSAGE,
  SET_CLASSROOMS_CREATE_IS_CREATE,
  SET_CLASSROOMS_CREATE_ITEM,
} from "./mutation";

export const createClassroom = (item) => {
  return (dispatch) => {
    dispatch({ type: SET_CLASSROOMS_CREATE_IS_LOADING, payload: true });

    return axios
      .post(`${process.env.REACT_APP_BACKEND_SOURCE}/class`,item)
      .then(({data}) => {
        dispatch({ type: SET_CLASSROOMS_CREATE_IS_LOADING, payload: false });
        dispatch({ type: SET_CLASSROOMS_CREATE_IS_CREATE, payload: true });
        dispatch({ type: SET_CLASSROOMS_CREATE_ITEM, payload: data });
        dispatch({ type: SET_CLASSROOMS_CREATE_MESSAGE, payload: "Classroom is create" });
      })
      .catch((err) => {
        dispatch({ type: SET_CLASSROOMS_CREATE_IS_LOADING, payload: false });
        dispatch({ type: SET_CLASSROOMS_CREATE_MESSAGE, payload: err.message });
      });
  };
};
