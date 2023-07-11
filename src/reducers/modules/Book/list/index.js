import axios from "axios";
import {
  SET_BOOKS_LIST_ITEMS,
  SET_BOOKS_LIST_SEARCH_ITEMS,
  SET_BOOKS_LIST_META,
  SET_BOOKS_LIST_LINKS,
  SET_BOOKS_LIST_MESSAGE,
  SET_BOOKS_LIST_IS_LOADING,
  SET_BOOKS_LIST_RESET
} from "./mutation";

export const relationBooks = "_expand=subject&_expand=bookType&_expand=classroom&_embed=bookFavs";
export const getBooks = (pagination = false) => {
  return (dispatch) => {
    dispatch({ type: SET_BOOKS_LIST_IS_LOADING, payload: true });

    return axios
      .get(
        `${process.env.REACT_APP_BACKEND_SOURCE}/books${
          pagination ? "/" : "?"
        }${relationBooks}`
      )
      .then(({data}) => {
        dispatch({ type: SET_BOOKS_LIST_ITEMS, payload: data });
        dispatch({ type: SET_BOOKS_LIST_IS_LOADING, payload: false });
        dispatch({ type: SET_BOOKS_LIST_META, payload: [] });
        dispatch({ type: SET_BOOKS_LIST_LINKS, payload: [] });
        dispatch({ type: SET_BOOKS_LIST_MESSAGE, payload: "Liste des livres" });
      })
      .catch((err) => {
        dispatch({ type: SET_BOOKS_LIST_IS_LOADING, payload: false });
        dispatch({ type: SET_BOOKS_LIST_ITEMS, payload: [] });
        dispatch({ type: SET_BOOKS_LIST_MESSAGE, payload: err.message });
      });
  };
};

export const getBook = (id) => {
  return (dispatch) => {
    dispatch({ type: SET_BOOKS_LIST_IS_LOADING, payload: true });

    return axios
      .get(`${process.env.REACT_APP_BACKEND_SOURCE}/books/${id}?${relationBooks}`)
      .then(({data}) => {
        dispatch({ type: SET_BOOKS_LIST_ITEMS, payload: data });
        dispatch({ type: SET_BOOKS_LIST_IS_LOADING, payload: false });
        dispatch({ type: SET_BOOKS_LIST_META, payload: [] });
        dispatch({ type: SET_BOOKS_LIST_LINKS, payload: [] });
        dispatch({ type: SET_BOOKS_LIST_MESSAGE, payload: "Liste des livres" });
      })
      .catch((err) => {
        dispatch({ type: SET_BOOKS_LIST_IS_LOADING, payload: false });

        dispatch({ type: SET_BOOKS_LIST_ITEMS, payload: [] });
        dispatch({ type: SET_BOOKS_LIST_MESSAGE, payload: err.message });
      });
  };
};

export const getBookFiltre =(params)=>{
  return (dispatch) => {
    dispatch({ type: SET_BOOKS_LIST_IS_LOADING, payload: true });

    return axios
      .get(
        `${process.env.REACT_APP_BACKEND_SOURCE}/books?pagination=false`
      )
      .then(({data}) => {
        var resultFiltre = data;
        params.forEach(param => {
          resultFiltre = resultFiltre.filter((rep)=> rep[param.name] === param.value)
        });
        console.log('resultD', resultFiltre)
        dispatch({ type: SET_BOOKS_LIST_SEARCH_ITEMS, payload: resultFiltre });
        dispatch({ type: SET_BOOKS_LIST_IS_LOADING, payload: false });
        dispatch({ type: SET_BOOKS_LIST_META, payload: [] });
        dispatch({ type: SET_BOOKS_LIST_LINKS, payload: [] });
        dispatch({ type: SET_BOOKS_LIST_MESSAGE, payload: "Liste des livres" });

      })
      .catch((err) => {
        dispatch({ type: SET_BOOKS_LIST_IS_LOADING, payload: false });
        dispatch({ type: SET_BOOKS_LIST_ITEMS, payload: [] });
        dispatch({ type: SET_BOOKS_LIST_MESSAGE, payload: err.message });
      });
  };
}

export const resetBooks = () => {
  return (dispatch) => {
    dispatch({ type: SET_BOOKS_LIST_RESET, payload: true });
  };
};
