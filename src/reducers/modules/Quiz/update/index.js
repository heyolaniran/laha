import axios from "axios";
import {
  SET_QUIZS_UPDATE_ITEM,
  SET_QUIZS_UPDATE_IS_LOADING,
  SET_QUIZS_UPDATE_IS_UPDATE,
  SET_QUIZS_UPDATE_MESSAGE,

} from "./mutation";

export const updateQuiz = (item) => {
  return (dispatch) => {
    dispatch({ type: SET_QUIZS_UPDATE_IS_LOADING, payload: true });
    return axios.get(`${process.env.REACT_APP_SANCTUM}/sanctum/csrf-cookie`).then((response) => {
              return axios
            .put(`${process.env.REACT_APP_BACKEND_SOURCE}/qcms/${item.id}`,item)
            .then(({data}) => {
              dispatch({ type: SET_QUIZS_UPDATE_IS_LOADING, payload: false });
              dispatch({ type: SET_QUIZS_UPDATE_IS_UPDATE, payload: true });
              dispatch({ type: SET_QUIZS_UPDATE_ITEM, payload: data });
              dispatch({ type: SET_QUIZS_UPDATE_MESSAGE, payload: "Quiz is update" });
            })
            .catch((err) => {
              dispatch({ type: SET_QUIZS_UPDATE_IS_UPDATE, payload: false });
              dispatch({ type: SET_QUIZS_UPDATE_IS_LOADING, payload: false });
              dispatch({ type: SET_QUIZS_UPDATE_ITEM, payload: {} });
              dispatch({ type: SET_QUIZS_UPDATE_MESSAGE, payload: "Quiz not update" });
            });
       
    })
  };
};
