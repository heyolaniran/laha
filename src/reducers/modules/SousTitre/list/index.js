import axios from "axios";
import {
  SET_SOUSTITRES_LIST_ITEMS,
  SET_SOUSTITRES_LIST_SEARCH_ITEMS,
  SET_SOUSTITRES_LIST_META,
  SET_SOUSTITRES_LIST_LINKS,
  SET_SOUSTITRES_LIST_MESSAGE,
  SET_SOUSTITRES_LIST_IS_LOADING,
  SET_SOUSTITRES_LIST_RESET
} from "./mutation";

export const relationSousTitres ="_expand=user&_sort=id&_order=desc";
export const getSousTitres = (pagination = false) => {
  return (dispatch) => {
    dispatch({ type: SET_SOUSTITRES_LIST_IS_LOADING, payload: true });

    return axios
      .get(
        `${process.env.REACT_APP_BACKEND_SOURCE}/sous_titres${
          pagination ? "/" : "?"+relationSousTitres
        }`
      )
      .then(({data}) => {
        dispatch({ type: SET_SOUSTITRES_LIST_ITEMS, payload: data });
        dispatch({ type: SET_SOUSTITRES_LIST_IS_LOADING, payload: false });
        dispatch({ type: SET_SOUSTITRES_LIST_META, payload: [] });
        dispatch({ type: SET_SOUSTITRES_LIST_LINKS, payload: [] });
        dispatch({ type: SET_SOUSTITRES_LIST_MESSAGE, payload: "Liste des livres" });
      })
      .catch((err) => {
        dispatch({ type: SET_SOUSTITRES_LIST_IS_LOADING, payload: false });
        dispatch({ type: SET_SOUSTITRES_LIST_ITEMS, payload: [] });
        dispatch({ type: SET_SOUSTITRES_LIST_MESSAGE, payload: err.message });
      });
  };
};
export const getCourSousTitres = (id) => {
  return (dispatch) => {
    dispatch({ type: SET_SOUSTITRES_LIST_IS_LOADING, payload: true });

    return axios
      .get(
        `${process.env.REACT_APP_BACKEND_SOURCE}/sous_titres?courId=${id}&${relationSousTitres}`
      )
      .then(({data}) => {
        dispatch({ type: SET_SOUSTITRES_LIST_ITEMS, payload: data });
        dispatch({ type: SET_SOUSTITRES_LIST_IS_LOADING, payload: false });
        dispatch({ type: SET_SOUSTITRES_LIST_META, payload: [] });
        dispatch({ type: SET_SOUSTITRES_LIST_LINKS, payload: [] });
        dispatch({ type: SET_SOUSTITRES_LIST_MESSAGE, payload: "Liste des livres" });
      })
      .catch((err) => {
        dispatch({ type: SET_SOUSTITRES_LIST_IS_LOADING, payload: false });
        dispatch({ type: SET_SOUSTITRES_LIST_ITEMS, payload: [] });
        dispatch({ type: SET_SOUSTITRES_LIST_MESSAGE, payload: err.message });
      });
  };
};

export const getSousTitre = (id) => {
  return (dispatch) => {
    dispatch({ type: SET_SOUSTITRES_LIST_IS_LOADING, payload: true });

    return axios
      .get(`${process.env.REACT_APP_BACKEND_SOURCE}/sous_titres/${id}`)
      .then(({data}) => {
        dispatch({ type: SET_SOUSTITRES_LIST_ITEMS, payload: data });
        dispatch({ type: SET_SOUSTITRES_LIST_IS_LOADING, payload: false });
        dispatch({ type: SET_SOUSTITRES_LIST_META, payload: [] });
        dispatch({ type: SET_SOUSTITRES_LIST_LINKS, payload: [] });
        dispatch({ type: SET_SOUSTITRES_LIST_MESSAGE, payload: "Liste des livres" });
      })
      .catch((err) => {
        dispatch({ type: SET_SOUSTITRES_LIST_IS_LOADING, payload: false });

        dispatch({ type: SET_SOUSTITRES_LIST_ITEMS, payload: [] });
        dispatch({ type: SET_SOUSTITRES_LIST_MESSAGE, payload: err.message });
      });
  };
};

export const getSousTitreFiltre =(params)=>{
  return (dispatch) => {
    dispatch({ type: SET_SOUSTITRES_LIST_IS_LOADING, payload: true });

    return axios
      .get(
        `${process.env.REACT_APP_BACKEND_SOURCE}/sous_titres?pagination=false`
      )
      .then(({data}) => {
        var resultFiltre = data;
        params.forEach(param => {
          resultFiltre = resultFiltre.filter((rep)=> rep[param.name] == param.value)
        });
        console.log('resultD', resultFiltre)
        dispatch({ type: SET_SOUSTITRES_LIST_SEARCH_ITEMS, payload: resultFiltre });
        dispatch({ type: SET_SOUSTITRES_LIST_IS_LOADING, payload: false });
        dispatch({ type: SET_SOUSTITRES_LIST_META, payload: [] });
        dispatch({ type: SET_SOUSTITRES_LIST_LINKS, payload: [] });
        dispatch({ type: SET_SOUSTITRES_LIST_MESSAGE, payload: "Liste des livres" });

      })
      .catch((err) => {
        dispatch({ type: SET_SOUSTITRES_LIST_IS_LOADING, payload: false });
        dispatch({ type: SET_SOUSTITRES_LIST_ITEMS, payload: [] });
        dispatch({ type: SET_SOUSTITRES_LIST_MESSAGE, payload: err.message });
      });
  };
}

export const resetSousTitres = () => {
  return (dispatch) => {
    dispatch({ type: SET_SOUSTITRES_LIST_RESET, payload: true });
  };
};
