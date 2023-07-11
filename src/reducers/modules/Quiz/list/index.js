import axios from "axios";
import {
  SET_QUIZS_LIST_ITEMS,
  SET_QUIZS_LIST_SEARCH_ITEMS,
  SET_QUIZS_LIST_META,
  SET_QUIZS_LIST_LINKS,
  SET_QUIZS_LIST_MESSAGE,
  SET_QUIZS_LIST_IS_LOADING,
  SET_QUIZS_LIST_RESET
} from "./mutation";

export const getQuizs = (pagination = false) => {
  return (dispatch) => {
    dispatch({ type: SET_QUIZS_LIST_IS_LOADING, payload: true });

    return axios
      .get(
        `${process.env.REACT_APP_BACKEND_SOURCE}/qcms${
          pagination ? "/" : "?pagination=false"
        }`
      )
      .then(({data}) => {
        dispatch({ type: SET_QUIZS_LIST_ITEMS, payload: data });
        dispatch({ type: SET_QUIZS_LIST_IS_LOADING, payload: false });
        dispatch({ type: SET_QUIZS_LIST_META, payload: [] });
        dispatch({ type: SET_QUIZS_LIST_LINKS, payload: [] });
        dispatch({ type: SET_QUIZS_LIST_MESSAGE, payload: "Liste des livres" });
      })
      .catch((err) => {
        dispatch({ type: SET_QUIZS_LIST_IS_LOADING, payload: false });
        dispatch({ type: SET_QUIZS_LIST_ITEMS, payload: [] });
        dispatch({ type: SET_QUIZS_LIST_MESSAGE, payload: err.message });
      });
  };
};

export const getQuiz = (id) => {
  return (dispatch) => {
    dispatch({ type: SET_QUIZS_LIST_IS_LOADING, payload: true });

    return axios
      .get(`${process.env.REACT_APP_BACKEND_SOURCE}/quizs/${id}`)
      .then(({data}) => {
        dispatch({ type: SET_QUIZS_LIST_ITEMS, payload: data });
        dispatch({ type: SET_QUIZS_LIST_IS_LOADING, payload: false });
        dispatch({ type: SET_QUIZS_LIST_META, payload: [] });
        dispatch({ type: SET_QUIZS_LIST_LINKS, payload: [] });
        dispatch({ type: SET_QUIZS_LIST_MESSAGE, payload: "Liste des livres" });
      })
      .catch((err) => {
        dispatch({ type: SET_QUIZS_LIST_IS_LOADING, payload: false });

        dispatch({ type: SET_QUIZS_LIST_ITEMS, payload: [] });
        dispatch({ type: SET_QUIZS_LIST_MESSAGE, payload: err.message });
      });
  };
};

export const getQuizFiltre =(params)=>{
  return (dispatch) => {
    dispatch({ type: SET_QUIZS_LIST_IS_LOADING, payload: true });

    return axios
      .get(
        `${process.env.REACT_APP_BACKEND_SOURCE}/quizs`
      )
      .then(({data}) => {
        var resultFiltre = data;
        params.forEach(param => {
          resultFiltre = resultFiltre.filter((rep)=> rep[param.name] == param.value)
        });
        console.log('resultD', resultFiltre)
        dispatch({ type: SET_QUIZS_LIST_SEARCH_ITEMS, payload: resultFiltre });
        dispatch({ type: SET_QUIZS_LIST_IS_LOADING, payload: false });
        dispatch({ type: SET_QUIZS_LIST_META, payload: [] });
        dispatch({ type: SET_QUIZS_LIST_LINKS, payload: [] });
        dispatch({ type: SET_QUIZS_LIST_MESSAGE, payload: "Liste des livres" });

      })
      .catch((err) => {
        dispatch({ type: SET_QUIZS_LIST_IS_LOADING, payload: false });
        dispatch({ type: SET_QUIZS_LIST_ITEMS, payload: [] });
        dispatch({ type: SET_QUIZS_LIST_MESSAGE, payload: err.message });
      });
  };
}

export const resetQuizs = () => {
  return (dispatch) => {
    dispatch({ type: SET_QUIZS_LIST_RESET, payload: true });
  };
};
