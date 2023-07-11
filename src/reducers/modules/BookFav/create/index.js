import axios from "axios";
import {
  SET_BOOKFAVS_CREATE_IS_LOADING,
  SET_BOOKFAVS_CREATE_MESSAGE,
  SET_BOOKFAVS_CREATE_IS_CREATE,
  SET_BOOKFAVS_CREATE_ITEM,
} from "./mutation";

export const createBookFav = (item) => {
  return (dispatch) => {
    dispatch({ type: SET_BOOKFAVS_CREATE_IS_LOADING, payload: true });

    return axios
      .post(`${process.env.REACT_APP_BACKEND_SOURCE}/bookFavs`,item)
      .then(({data}) => {
        dispatch({ type: SET_BOOKFAVS_CREATE_IS_LOADING, payload: false });
        dispatch({ type: SET_BOOKFAVS_CREATE_IS_CREATE, payload: true });
        dispatch({ type: SET_BOOKFAVS_CREATE_ITEM, payload: data });
        dispatch({ type: SET_BOOKFAVS_CREATE_MESSAGE, payload: "BookFav is create" });
      })
      .catch((err) => {
        dispatch({ type: SET_BOOKFAVS_CREATE_IS_LOADING, payload: false });
        dispatch({ type: SET_BOOKFAVS_CREATE_MESSAGE, payload: err.message });
      });
  };
};
