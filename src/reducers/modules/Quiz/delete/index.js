import axios from "axios";
import {
  SET_QUIZS_DELETE_IS_LOADING,
  SET_QUIZS_DELETE_IS_DELETE,
  SET_QUIZS_DELETE_ITEM,
  SET_QUIZS_DELETE_MESSAGE,
  SET_QUIZS_DELETE_RESET,
} from "./mutation";

export const deleteQuiz = (id) => {
  return (dispatch) => {
    dispatch({ type: SET_QUIZS_DELETE_IS_LOADING, payload: true });

    return axios
      .delete(`${process.env.REACT_APP_API_URL}/quizs/${id}`)
      .then((res) => {
        dispatch({ type: SET_QUIZS_DELETE_IS_LOADING, payload: false });
        dispatch({ type: SET_QUIZS_DELETE_IS_DELETE, payload: true });
        dispatch({ type: SET_QUIZS_DELETE_ITEM, payload: res.data });
        dispatch({ type: SET_QUIZS_DELETE_MESSAGE, payload: "Quiz is delete" });
      })
      .catch((err) => {
        dispatch({ type: SET_QUIZS_DELETE_IS_LOADING, payload: false });
        dispatch({ type: SET_QUIZS_DELETE_IS_DELETE, payload: false });
        dispatch({ type: SET_QUIZS_DELETE_MESSAGE, payload: err.message });
      });
  };
};
