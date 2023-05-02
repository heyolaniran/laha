import axios from "axios";
import {
  SET_BOOKTYPES_CREATE_IS_LOADING,
  SET_BOOKTYPES_CREATE_MESSAGE,
  SET_BOOKTYPES_CREATE_IS_CREATE,
  SET_BOOKTYPES_CREATE_ITEM,
} from "./mutation";

export const createBookType = (item) => {
  return (dispatch) => {
    dispatch({ type: SET_BOOKTYPES_CREATE_IS_LOADING, payload: true });

    return axios
      .post(`${process.env.REACT_APP_API_URL}/bookTypes`,item)
      .then(({data}) => {
        dispatch({ type: SET_BOOKTYPES_CREATE_IS_LOADING, payload: false });
        dispatch({ type: SET_BOOKTYPES_CREATE_IS_CREATE, payload: true });
        dispatch({ type: SET_BOOKTYPES_CREATE_ITEM, payload: data });
        dispatch({ type: SET_BOOKTYPES_CREATE_MESSAGE, payload: "BookType is create" });
      })
      .catch((err) => {
        dispatch({ type: SET_BOOKTYPES_CREATE_IS_LOADING, payload: false });
        dispatch({ type: SET_BOOKTYPES_CREATE_MESSAGE, payload: err.message });
      });
  };
};
