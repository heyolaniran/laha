import axios from "axios";
import {
  SET_USER_REPETS_LIST_ITEMS,
  SET_USER_REPETS_LIST_SEARCH_ITEMS,
  SET_USER_REPETS_LIST_META,
  SET_USER_REPETS_LIST_LINKS,
  SET_USER_REPETS_LIST_MESSAGE,
  SET_USER_REPETS_LIST_IS_LOADING,
  SET_USER_REPETS_LIST_RESET
} from "./mutation";

export const getUserRepets = (pagination = false) => {
  return (dispatch) => {
    dispatch({ type: SET_USER_REPETS_LIST_IS_LOADING, payload: true });

    return axios
      .get(
        `${process.env.BACKEND_SOURCE}/repetition-courses/program`
      )
      .then(({data}) => {
        dispatch({ type: SET_USER_REPETS_LIST_ITEMS, payload: data });
        dispatch({ type: SET_USER_REPETS_LIST_IS_LOADING, payload: false });
        dispatch({ type: SET_USER_REPETS_LIST_META, payload: [] });
        dispatch({ type: SET_USER_REPETS_LIST_LINKS, payload: [] });
        dispatch({ type: SET_USER_REPETS_LIST_MESSAGE, payload: "Liste des livres" });
      })
      .catch((err) => {
        dispatch({ type: SET_USER_REPETS_LIST_IS_LOADING, payload: false });
        dispatch({ type: SET_USER_REPETS_LIST_ITEMS, payload: [] });
        dispatch({ type: SET_USER_REPETS_LIST_MESSAGE, payload: err.message });
      });
  };
};

export const getUserRepet = (id) => {
  return (dispatch) => {
    dispatch({ type: SET_USER_REPETS_LIST_IS_LOADING, payload: true });

    return axios
      .get(`${process.env.BACKEND_SOURCE}/demandes/cours/repetition/${id}`)
      .then(({data}) => {
        dispatch({ type: SET_USER_REPETS_LIST_ITEMS, payload: data });
        dispatch({ type: SET_USER_REPETS_LIST_IS_LOADING, payload: false });
        dispatch({ type: SET_USER_REPETS_LIST_META, payload: [] });
        dispatch({ type: SET_USER_REPETS_LIST_LINKS, payload: [] });
        dispatch({ type: SET_USER_REPETS_LIST_MESSAGE, payload: "Liste des livres" });
      })
      .catch((err) => {
        dispatch({ type: SET_USER_REPETS_LIST_IS_LOADING, payload: false });

        dispatch({ type: SET_USER_REPETS_LIST_ITEMS, payload: [] });
        dispatch({ type: SET_USER_REPETS_LIST_MESSAGE, payload: err.message });
      });
  };
};

export const getUserRepetFiltre =(params)=>{
  return (dispatch) => {
    dispatch({ type: SET_USER_REPETS_LIST_IS_LOADING, payload: true });

    return axios
      .get(
        `${process.env.BACKEND_SOURCE}/demandes/cours/repetition/liste`
      )
      .then(({data}) => {
        var resultFiltre = data;
        params.forEach(param => {
          resultFiltre = resultFiltre.filter((rep)=> rep[param.name] == param.value)
        });
        console.log('resultD', resultFiltre)
        dispatch({ type: SET_USER_REPETS_LIST_SEARCH_ITEMS, payload: resultFiltre });
        dispatch({ type: SET_USER_REPETS_LIST_IS_LOADING, payload: false });
        dispatch({ type: SET_USER_REPETS_LIST_META, payload: [] });
        dispatch({ type: SET_USER_REPETS_LIST_LINKS, payload: [] });
        dispatch({ type: SET_USER_REPETS_LIST_MESSAGE, payload: "Liste des livres" });

      })
      .catch((err) => {
        dispatch({ type: SET_USER_REPETS_LIST_IS_LOADING, payload: false });
        dispatch({ type: SET_USER_REPETS_LIST_ITEMS, payload: [] });
        dispatch({ type: SET_USER_REPETS_LIST_MESSAGE, payload: err.message });
      });
  };
}

export const resetUserRepets = () => {
  return (dispatch) => {
    dispatch({ type: SET_USER_REPETS_LIST_RESET, payload: true });
  };
};
