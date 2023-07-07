import axios from "axios";
import {
  SET_REPETITIONS_CREATE_IS_LOADING,
  SET_REPETITIONS_CREATE_MESSAGE,
  SET_REPETITIONS_CREATE_IS_CREATE,
  SET_REPETITIONS_CREATE_ITEM,
} from "./mutation";

export const createRepetition = (item) => {
  return (dispatch) => {
    dispatch({ type: SET_REPETITIONS_CREATE_IS_LOADING, payload: true });

    return axios
      .post(`${process.env.BACKEND_SOURCE}/repetitions`,item)
      .then(({data}) => {
        dispatch({ type: SET_REPETITIONS_CREATE_IS_LOADING, payload: false });
        dispatch({ type: SET_REPETITIONS_CREATE_IS_CREATE, payload: true });
        dispatch({ type: SET_REPETITIONS_CREATE_ITEM, payload: data });
        dispatch({ type: SET_REPETITIONS_CREATE_MESSAGE, payload: "Repetition is create" });
      })
      .catch((err) => {
        dispatch({ type: SET_REPETITIONS_CREATE_IS_LOADING, payload: false });
        dispatch({ type: SET_REPETITIONS_CREATE_MESSAGE, payload: err.message });
      });
  };
};
