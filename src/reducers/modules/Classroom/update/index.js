import axios from "axios";
import {
  SET_CLASSROOMS_UPDATE_ITEM,
  SET_CLASSROOMS_UPDATE_IS_LOADING,
  SET_CLASSROOMS_UPDATE_IS_UPDATE,
  SET_CLASSROOMS_UPDATE_MESSAGE,

} from "./mutation";

export const updateClassroom = (item) => {
  return (dispatch) => {
    dispatch({ type: SET_CLASSROOMS_UPDATE_IS_LOADING, payload: true });

    return axios
      .put(`${process.env.REACT_APP_BACKEND_SOURCE}/class/${item.id}`,item)
      .then(({data}) => {
        dispatch({ type: SET_CLASSROOMS_UPDATE_IS_LOADING, payload: false });
        dispatch({ type: SET_CLASSROOMS_UPDATE_IS_UPDATE, payload: true });
        dispatch({ type: SET_CLASSROOMS_UPDATE_ITEM, payload: data });
        dispatch({ type: SET_CLASSROOMS_UPDATE_MESSAGE, payload: "Classroom is update" });
      })
      .catch((err) => {
        dispatch({ type: SET_CLASSROOMS_UPDATE_IS_UPDATE, payload: false });
        dispatch({ type: SET_CLASSROOMS_UPDATE_IS_LOADING, payload: false });
        dispatch({ type: SET_CLASSROOMS_UPDATE_ITEM, payload: {} });
        dispatch({ type: SET_CLASSROOMS_UPDATE_MESSAGE, payload: "Classroom not update" });
      });
  };
};
