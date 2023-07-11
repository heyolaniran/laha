import axios from "axios";
import {
  SET_REPETITIONS_LIST_ITEMS,
  SET_REPETITIONS_LIST_SEARCH_ITEMS,
  SET_REPETITIONS_LIST_META,
  SET_REPETITIONS_LIST_LINKS,
  SET_REPETITIONS_LIST_MESSAGE,
  SET_REPETITIONS_LIST_IS_LOADING,
  SET_REPETITIONS_LIST_RESET
} from "./mutation";

export const getRepetitions = (pagination = false) => {
  return (dispatch) => {
    dispatch({ type: SET_REPETITIONS_LIST_IS_LOADING, payload: true });

    return axios
      .get(
        `${process.env.BACKEND_SOURCE}/cours/repetition${
          pagination ? "/" : "?pagination=false"
        }`
      )
      .then(({data}) => {
        dispatch({ type: SET_REPETITIONS_LIST_ITEMS, payload: data });
        dispatch({ type: SET_REPETITIONS_LIST_IS_LOADING, payload: false });
        dispatch({ type: SET_REPETITIONS_LIST_META, payload: [] });
        dispatch({ type: SET_REPETITIONS_LIST_LINKS, payload: [] });
        dispatch({ type: SET_REPETITIONS_LIST_MESSAGE, payload: "Liste des livres" });
      })
      .catch((err) => {
        dispatch({ type: SET_REPETITIONS_LIST_IS_LOADING, payload: false });
        dispatch({ type: SET_REPETITIONS_LIST_ITEMS, payload: [] });
        dispatch({ type: SET_REPETITIONS_LIST_MESSAGE, payload: err.message });
      });
  };
};

export const getRepetition = (id) => {
  return (dispatch) => {
    dispatch({ type: SET_REPETITIONS_LIST_IS_LOADING, payload: true });

    return axios
      .get(`${process.env.BACKEND_SOURCE}/repetitions/${id}`)
      .then(({data}) => {
        dispatch({ type: SET_REPETITIONS_LIST_ITEMS, payload: data });
        dispatch({ type: SET_REPETITIONS_LIST_IS_LOADING, payload: false });
        dispatch({ type: SET_REPETITIONS_LIST_META, payload: [] });
        dispatch({ type: SET_REPETITIONS_LIST_LINKS, payload: [] });
        dispatch({ type: SET_REPETITIONS_LIST_MESSAGE, payload: "Liste des livres" });
      })
      .catch((err) => {
        dispatch({ type: SET_REPETITIONS_LIST_IS_LOADING, payload: false });

        dispatch({ type: SET_REPETITIONS_LIST_ITEMS, payload: [] });
        dispatch({ type: SET_REPETITIONS_LIST_MESSAGE, payload: err.message });
      });
  };
};

export const getRepetitionFiltre =(params)=>{
  return (dispatch) => {
    dispatch({ type: SET_REPETITIONS_LIST_IS_LOADING, payload: true });

    return axios
      .get(
        `${process.env.BACKEND_SOURCE}/repetitions?pagination=false`
      )
      .then(({data}) => {
        var resultFiltre = data;
        params.forEach(param => {
          resultFiltre = resultFiltre.filter((rep)=> rep[param.name] == param.value)
        });
        console.log('resultD', resultFiltre)
        dispatch({ type: SET_REPETITIONS_LIST_SEARCH_ITEMS, payload: resultFiltre });
        dispatch({ type: SET_REPETITIONS_LIST_IS_LOADING, payload: false });
        dispatch({ type: SET_REPETITIONS_LIST_META, payload: [] });
        dispatch({ type: SET_REPETITIONS_LIST_LINKS, payload: [] });
        dispatch({ type: SET_REPETITIONS_LIST_MESSAGE, payload: "Liste des livres" });

      })
      .catch((err) => {
        dispatch({ type: SET_REPETITIONS_LIST_IS_LOADING, payload: false });
        dispatch({ type: SET_REPETITIONS_LIST_ITEMS, payload: [] });
        dispatch({ type: SET_REPETITIONS_LIST_MESSAGE, payload: err.message });
      });
  };
}

export const resetRepetitions = () => {
  return (dispatch) => {
    dispatch({ type: SET_REPETITIONS_LIST_RESET, payload: true });
  };
};
