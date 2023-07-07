import axios from "axios";
import {
  SET_BOOKFAVS_LIST_ITEMS,
  SET_BOOKFAVS_LIST_SEARCH_ITEMS,
  SET_BOOKFAVS_LIST_META,
  SET_BOOKFAVS_LIST_LINKS,
  SET_BOOKFAVS_LIST_MESSAGE,
  SET_BOOKFAVS_LIST_IS_LOADING,
  SET_BOOKFAVS_LIST_RESET
} from "./mutation";

export const getBookFavs = (pagination = false) => {
  return (dispatch) => {
    dispatch({ type: SET_BOOKFAVS_LIST_IS_LOADING, payload: true });

    return axios
      .get(
        `${process.env.BACKEND_SOURCE}/bookFavs${
          pagination ? "/" : "?pagination=false"
        }`
      )
      .then(({data}) => {
        dispatch({ type: SET_BOOKFAVS_LIST_ITEMS, payload: data });
        dispatch({ type: SET_BOOKFAVS_LIST_IS_LOADING, payload: false });
        dispatch({ type: SET_BOOKFAVS_LIST_META, payload: [] });
        dispatch({ type: SET_BOOKFAVS_LIST_LINKS, payload: [] });
        dispatch({ type: SET_BOOKFAVS_LIST_MESSAGE, payload: "Liste des livres" });
      })
      .catch((err) => {
        dispatch({ type: SET_BOOKFAVS_LIST_IS_LOADING, payload: false });
        dispatch({ type: SET_BOOKFAVS_LIST_ITEMS, payload: [] });
        dispatch({ type: SET_BOOKFAVS_LIST_MESSAGE, payload: err.message });
      });
  };
};

export const getBookFav = (id) => {
  return (dispatch) => {
    dispatch({ type: SET_BOOKFAVS_LIST_IS_LOADING, payload: true });

    return axios
      .get(`${process.env.BACKEND_SOURCE}/bookFavs/${id}`)
      .then(({data}) => {
        dispatch({ type: SET_BOOKFAVS_LIST_ITEMS, payload: data });
        dispatch({ type: SET_BOOKFAVS_LIST_IS_LOADING, payload: false });
        dispatch({ type: SET_BOOKFAVS_LIST_META, payload: [] });
        dispatch({ type: SET_BOOKFAVS_LIST_LINKS, payload: [] });
        dispatch({ type: SET_BOOKFAVS_LIST_MESSAGE, payload: "Liste des livres" });
      })
      .catch((err) => {
        dispatch({ type: SET_BOOKFAVS_LIST_IS_LOADING, payload: false });

        dispatch({ type: SET_BOOKFAVS_LIST_ITEMS, payload: [] });
        dispatch({ type: SET_BOOKFAVS_LIST_MESSAGE, payload: err.message });
      });
  };
};

export const getBookFavFiltre =(params)=>{
  return (dispatch) => {
    dispatch({ type: SET_BOOKFAVS_LIST_IS_LOADING, payload: true });

    return axios
      .get(
        `${process.env.BACKEND_SOURCE}/bookFavs?pagination=false`
      )
      .then(({data}) => {
        var resultFiltre = data;
        params.forEach(param => {
          resultFiltre = resultFiltre.filter((rep)=> rep[param.name] == param.value)
        });
        console.log('resultD', resultFiltre)
        dispatch({ type: SET_BOOKFAVS_LIST_SEARCH_ITEMS, payload: resultFiltre });
        dispatch({ type: SET_BOOKFAVS_LIST_IS_LOADING, payload: false });
        dispatch({ type: SET_BOOKFAVS_LIST_META, payload: [] });
        dispatch({ type: SET_BOOKFAVS_LIST_LINKS, payload: [] });
        dispatch({ type: SET_BOOKFAVS_LIST_MESSAGE, payload: "Liste des livres" });

      })
      .catch((err) => {
        dispatch({ type: SET_BOOKFAVS_LIST_IS_LOADING, payload: false });
        dispatch({ type: SET_BOOKFAVS_LIST_ITEMS, payload: [] });
        dispatch({ type: SET_BOOKFAVS_LIST_MESSAGE, payload: err.message });
      });
  };
}

export const resetBookFavs = () => {
  return (dispatch) => {
    dispatch({ type: SET_BOOKFAVS_LIST_RESET, payload: true });
  };
};
