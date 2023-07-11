import axios from "axios";
import {
  SET_BOOKTYPES_UPDATE_ITEM,
  SET_BOOKTYPES_UPDATE_IS_LOADING,
  SET_BOOKTYPES_UPDATE_IS_UPDATE,
  SET_BOOKTYPES_UPDATE_MESSAGE,

} from "./mutation";

export const updateBookType = (item) => {
  return (dispatch) => {
    dispatch({ type: SET_BOOKTYPES_UPDATE_IS_LOADING, payload: true });

    return axios
      .put(`${process.env.REACT_APP_BACKEND_SOURCE}/bookTypes/${item.id}`,item)
      .then(({data}) => {
        dispatch({ type: SET_BOOKTYPES_UPDATE_IS_LOADING, payload: false });
        dispatch({ type: SET_BOOKTYPES_UPDATE_IS_UPDATE, payload: true });
        dispatch({ type: SET_BOOKTYPES_UPDATE_ITEM, payload: data });
        dispatch({ type: SET_BOOKTYPES_UPDATE_MESSAGE, payload: "BookType is update" });
      })
      .catch((err) => {
        dispatch({ type: SET_BOOKTYPES_UPDATE_IS_UPDATE, payload: false });
        dispatch({ type: SET_BOOKTYPES_UPDATE_IS_LOADING, payload: false });
        dispatch({ type: SET_BOOKTYPES_UPDATE_ITEM, payload: {} });
        dispatch({ type: SET_BOOKTYPES_UPDATE_MESSAGE, payload: "BookType not update" });
      });
  };
};
