import axios from "axios";
import {
  SET_BOOKTYPES_LIST_ITEMS,
  SET_BOOKTYPES_LIST_SEARCH_ITEMS,
  SET_BOOKTYPES_LIST_META,
  SET_BOOKTYPES_LIST_LINKS,
  SET_BOOKTYPES_LIST_MESSAGE,
  SET_BOOKTYPES_LIST_IS_LOADING,
  SET_BOOKTYPES_LIST_RESET
} from "./mutation";

export const getBookTypes = (pagination = false) => {
  return (dispatch) => {
    dispatch({ type: SET_BOOKTYPES_LIST_IS_LOADING, payload: true });

    return axios
      .get(
        `${process.env.REACT_APP_API_URL}/bookTypes${
          pagination ? "/" : "?pagination=false"
        }`
      )
      .then(({data}) => {
        dispatch({ type: SET_BOOKTYPES_LIST_ITEMS, payload: data });
        dispatch({ type: SET_BOOKTYPES_LIST_IS_LOADING, payload: false });
        dispatch({ type: SET_BOOKTYPES_LIST_META, payload: [] });
        dispatch({ type: SET_BOOKTYPES_LIST_LINKS, payload: [] });
        dispatch({ type: SET_BOOKTYPES_LIST_MESSAGE, payload: "Liste des livres" });
      })
      .catch((err) => {
        dispatch({ type: SET_BOOKTYPES_LIST_IS_LOADING, payload: false });
        dispatch({ type: SET_BOOKTYPES_LIST_ITEMS, payload: [] });
        dispatch({ type: SET_BOOKTYPES_LIST_MESSAGE, payload: err.message });
      });
  };
};

export const getBookType = (id) => {
  return (dispatch) => {
    dispatch({ type: SET_BOOKTYPES_LIST_IS_LOADING, payload: true });

    return axios
      .get(`${process.env.REACT_APP_API_URL}/bookTypes/${id}`)
      .then(({data}) => {
        dispatch({ type: SET_BOOKTYPES_LIST_ITEMS, payload: data });
        dispatch({ type: SET_BOOKTYPES_LIST_IS_LOADING, payload: false });
        dispatch({ type: SET_BOOKTYPES_LIST_META, payload: [] });
        dispatch({ type: SET_BOOKTYPES_LIST_LINKS, payload: [] });
        dispatch({ type: SET_BOOKTYPES_LIST_MESSAGE, payload: "Liste des livres" });
      })
      .catch((err) => {
        dispatch({ type: SET_BOOKTYPES_LIST_IS_LOADING, payload: false });

        dispatch({ type: SET_BOOKTYPES_LIST_ITEMS, payload: [] });
        dispatch({ type: SET_BOOKTYPES_LIST_MESSAGE, payload: err.message });
      });
  };
};

export const getBookTypeFiltre =(params)=>{
  return (dispatch) => {
    dispatch({ type: SET_BOOKTYPES_LIST_IS_LOADING, payload: true });

    return axios
      .get(
        `${process.env.REACT_APP_API_URL}/bookTypes?pagination=false`
      )
      .then(({data}) => {
        var resultFiltre = data;
        params.forEach(param => {
          resultFiltre = resultFiltre.filter((rep)=> rep[param.name] == param.value)
        });
        console.log('resultD', resultFiltre)
        dispatch({ type: SET_BOOKTYPES_LIST_SEARCH_ITEMS, payload: resultFiltre });
        dispatch({ type: SET_BOOKTYPES_LIST_IS_LOADING, payload: false });
        dispatch({ type: SET_BOOKTYPES_LIST_META, payload: [] });
        dispatch({ type: SET_BOOKTYPES_LIST_LINKS, payload: [] });
        dispatch({ type: SET_BOOKTYPES_LIST_MESSAGE, payload: "Liste des livres" });

      })
      .catch((err) => {
        dispatch({ type: SET_BOOKTYPES_LIST_IS_LOADING, payload: false });
        dispatch({ type: SET_BOOKTYPES_LIST_ITEMS, payload: [] });
        dispatch({ type: SET_BOOKTYPES_LIST_MESSAGE, payload: err.message });
      });
  };
}

export const resetBookTypes = () => {
  return (dispatch) => {
    dispatch({ type: SET_BOOKTYPES_LIST_RESET, payload: true });
  };
};
