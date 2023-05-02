import axios from "axios";
import {
  SET_COURS_LIST_ITEMS,
  SET_COURS_LIST_SEARCH_ITEMS,
  SET_COURS_LIST_META,
  SET_COURS_LIST_LINKS,
  SET_COURS_LIST_MESSAGE,
  SET_COURS_LIST_IS_LOADING,
  SET_COURS_LIST_RESET
} from "./mutation";
export const relationCours = "_expand=subject&_expand=classroom&_embed=sous_titres&_embed=cours_starts&_sort=id&_order=desc";
export const getCours = (pagination = false) => {
  return (dispatch) => {
    dispatch({ type: SET_COURS_LIST_IS_LOADING, payload: true });

    return axios
      .get(
        `${process.env.REACT_APP_API_URL}/cours${
          pagination ? "/" : "?"+relationCours
        }`
      )
      .then(({data}) => {
        dispatch({ type: SET_COURS_LIST_ITEMS, payload: data });
        dispatch({ type: SET_COURS_LIST_IS_LOADING, payload: false });
        dispatch({ type: SET_COURS_LIST_META, payload: [] });
        dispatch({ type: SET_COURS_LIST_LINKS, payload: [] });
        dispatch({ type: SET_COURS_LIST_MESSAGE, payload: "Liste des livres" });
      })
      .catch((err) => {
        dispatch({ type: SET_COURS_LIST_IS_LOADING, payload: false });
        dispatch({ type: SET_COURS_LIST_ITEMS, payload: [] });
        dispatch({ type: SET_COURS_LIST_MESSAGE, payload: err.message });
      });
  };
};

export const getCour = (id) => {
  return (dispatch) => {
    dispatch({ type: SET_COURS_LIST_IS_LOADING, payload: true });

    return axios
      .get(`${process.env.REACT_APP_API_URL}/cours/${id}?${relationCours}`)
      .then(({data}) => {
        dispatch({ type: SET_COURS_LIST_ITEMS, payload: data });
        dispatch({ type: SET_COURS_LIST_IS_LOADING, payload: false });
        dispatch({ type: SET_COURS_LIST_META, payload: [] });
        dispatch({ type: SET_COURS_LIST_LINKS, payload: [] });
        dispatch({ type: SET_COURS_LIST_MESSAGE, payload: "Liste des livres" });
      })
      .catch((err) => {
        dispatch({ type: SET_COURS_LIST_IS_LOADING, payload: false });

        dispatch({ type: SET_COURS_LIST_ITEMS, payload: [] });
        dispatch({ type: SET_COURS_LIST_MESSAGE, payload: err.message });
      });
  };
};

export const getCourFiltre =(params)=>{
  return (dispatch) => {
    dispatch({ type: SET_COURS_LIST_IS_LOADING, payload: true });

    return axios
      .get(
        `${process.env.REACT_APP_API_URL}/cours?pagination=false`
      )
      .then(({data}) => {
        var resultFiltre = data;
        params.forEach(param => {
          resultFiltre = resultFiltre.filter((rep)=> rep[param.name] == param.value)
        });
        console.log('resultD', resultFiltre)
        dispatch({ type: SET_COURS_LIST_SEARCH_ITEMS, payload: resultFiltre });
        dispatch({ type: SET_COURS_LIST_IS_LOADING, payload: false });
        dispatch({ type: SET_COURS_LIST_META, payload: [] });
        dispatch({ type: SET_COURS_LIST_LINKS, payload: [] });
        dispatch({ type: SET_COURS_LIST_MESSAGE, payload: "Liste des livres" });

      })
      .catch((err) => {
        dispatch({ type: SET_COURS_LIST_IS_LOADING, payload: false });
        dispatch({ type: SET_COURS_LIST_ITEMS, payload: [] });
        dispatch({ type: SET_COURS_LIST_MESSAGE, payload: err.message });
      });
  };
}

export const resetCours = () => {
  return (dispatch) => {
    dispatch({ type: SET_COURS_LIST_RESET, payload: true });
  };
};
