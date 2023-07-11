import axios from "axios";
import {
  SET_BOOKFAVS_UPDATE_ITEM,
  SET_BOOKFAVS_UPDATE_IS_LOADING,
  SET_BOOKFAVS_UPDATE_IS_UPDATE,
  SET_BOOKFAVS_UPDATE_MESSAGE,

} from "./mutation";

export const updateBookFav = (item) => {
  return (dispatch) => {
    dispatch({ type: SET_BOOKFAVS_UPDATE_IS_LOADING, payload: true });

    return axios
      .put(`${process.env.REACT_APP_BACKEND_SOURCE}/bookFavs/${item.id}`,item)
      .then(({data}) => {
        dispatch({ type: SET_BOOKFAVS_UPDATE_IS_LOADING, payload: false });
        dispatch({ type: SET_BOOKFAVS_UPDATE_IS_UPDATE, payload: true });
        dispatch({ type: SET_BOOKFAVS_UPDATE_ITEM, payload: data });
        dispatch({ type: SET_BOOKFAVS_UPDATE_MESSAGE, payload: "BookFav is update" });
      })
      .catch((err) => {
        dispatch({ type: SET_BOOKFAVS_UPDATE_IS_UPDATE, payload: false });
        dispatch({ type: SET_BOOKFAVS_UPDATE_IS_LOADING, payload: false });
        dispatch({ type: SET_BOOKFAVS_UPDATE_ITEM, payload: {} });
        dispatch({ type: SET_BOOKFAVS_UPDATE_MESSAGE, payload: "BookFav not update" });
      });
  };
};
