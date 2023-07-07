import axios from "axios";
import {
  SET_BOOKFAVS_DELETE_IS_LOADING,
  SET_BOOKFAVS_DELETE_IS_DELETE,
  SET_BOOKFAVS_DELETE_ITEM,
  SET_BOOKFAVS_DELETE_MESSAGE,
  SET_BOOKFAVS_DELETE_RESET,
} from "./mutation";

export const deleteBookFav = (id) => {
  return (dispatch) => {
    dispatch({ type: SET_BOOKFAVS_DELETE_IS_LOADING, payload: true });

    return axios
      .delete(`${process.env.BACKEND_SOURCE}/bookFavs/${id}`)
      .then((res) => {
        dispatch({ type: SET_BOOKFAVS_DELETE_IS_LOADING, payload: false });
        dispatch({ type: SET_BOOKFAVS_DELETE_IS_DELETE, payload: true });
        dispatch({ type: SET_BOOKFAVS_DELETE_ITEM, payload: res.data });
        dispatch({ type: SET_BOOKFAVS_DELETE_MESSAGE, payload: "BookFav is delete" });
      })
      .catch((err) => {
        dispatch({ type: SET_BOOKFAVS_DELETE_IS_LOADING, payload: false });
        dispatch({ type: SET_BOOKFAVS_DELETE_IS_DELETE, payload: false });
        dispatch({ type: SET_BOOKFAVS_DELETE_MESSAGE, payload: err.message });
      });
  };
};
