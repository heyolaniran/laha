import axios from "axios";
import {
  SET_EXERCICES_LIST_ITEMS,
  SET_EXERCICES_LIST_SEARCH_ITEMS,
  SET_EXERCICES_LIST_META,
  SET_EXERCICES_LIST_LINKS,
  SET_EXERCICES_LIST_MESSAGE,
  SET_EXERCICES_LIST_IS_LOADING,
  SET_EXERCICES_LIST_RESET
} from "./mutation";

export const getExercices = (pagination = false) => {
  return (dispatch) => {
    dispatch({ type: SET_EXERCICES_LIST_IS_LOADING, payload: true });

    return axios
      .get(
        `${process.env.BACKEND_SOURCE}/exercices${
          pagination ? "/" : "?pagination=false"
        }`
      )
      .then(({data}) => {
        dispatch({ type: SET_EXERCICES_LIST_ITEMS, payload: data });
        dispatch({ type: SET_EXERCICES_LIST_IS_LOADING, payload: false });
        dispatch({ type: SET_EXERCICES_LIST_META, payload: [] });
        dispatch({ type: SET_EXERCICES_LIST_LINKS, payload: [] });
        dispatch({ type: SET_EXERCICES_LIST_MESSAGE, payload: "Liste des livres" });
      })
      .catch((err) => {
        dispatch({ type: SET_EXERCICES_LIST_IS_LOADING, payload: false });
        dispatch({ type: SET_EXERCICES_LIST_ITEMS, payload: [] });
        dispatch({ type: SET_EXERCICES_LIST_MESSAGE, payload: err.message });
      });
  };
};

export const getExercice = (id) => {
  return (dispatch) => {
    dispatch({ type: SET_EXERCICES_LIST_IS_LOADING, payload: true });

    return axios
      .get(`${process.env.BACKEND_SOURCE}/exercices/${id}`)
      .then(({data}) => {
        dispatch({ type: SET_EXERCICES_LIST_ITEMS, payload: data });
        dispatch({ type: SET_EXERCICES_LIST_IS_LOADING, payload: false });
        dispatch({ type: SET_EXERCICES_LIST_META, payload: [] });
        dispatch({ type: SET_EXERCICES_LIST_LINKS, payload: [] });
        dispatch({ type: SET_EXERCICES_LIST_MESSAGE, payload: "Liste des livres" });
      })
      .catch((err) => {
        dispatch({ type: SET_EXERCICES_LIST_IS_LOADING, payload: false });

        dispatch({ type: SET_EXERCICES_LIST_ITEMS, payload: [] });
        dispatch({ type: SET_EXERCICES_LIST_MESSAGE, payload: err.message });
      });
  };
};

export const getExerciceFiltre =(params)=>{
  return (dispatch) => {
    dispatch({ type: SET_EXERCICES_LIST_IS_LOADING, payload: true });

    return axios
      .get(
        `${process.env.BACKEND_SOURCE}/exercices?pagination=false`
      )
      .then(({data}) => {
        var resultFiltre = data;
        params.forEach(param => {
          resultFiltre = resultFiltre.filter((rep)=> rep[param.name] == param.value)
        });
        console.log('resultD', resultFiltre)
        dispatch({ type: SET_EXERCICES_LIST_SEARCH_ITEMS, payload: resultFiltre });
        dispatch({ type: SET_EXERCICES_LIST_IS_LOADING, payload: false });
        dispatch({ type: SET_EXERCICES_LIST_META, payload: [] });
        dispatch({ type: SET_EXERCICES_LIST_LINKS, payload: [] });
        dispatch({ type: SET_EXERCICES_LIST_MESSAGE, payload: "Liste des livres" });

      })
      .catch((err) => {
        dispatch({ type: SET_EXERCICES_LIST_IS_LOADING, payload: false });
        dispatch({ type: SET_EXERCICES_LIST_ITEMS, payload: [] });
        dispatch({ type: SET_EXERCICES_LIST_MESSAGE, payload: err.message });
      });
  };
}

export const resetExercices = () => {
  return (dispatch) => {
    dispatch({ type: SET_EXERCICES_LIST_RESET, payload: true });
  };
};
