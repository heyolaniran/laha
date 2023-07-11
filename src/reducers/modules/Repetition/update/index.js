import axios from "axios";
import {
  SET_REPETITIONS_UPDATE_ITEM,
  SET_REPETITIONS_UPDATE_IS_LOADING,
  SET_REPETITIONS_UPDATE_IS_UPDATE,
  SET_REPETITIONS_UPDATE_MESSAGE,

} from "./mutation";

export const updateRepetition = (item) => {
  return (dispatch) => {
    dispatch({ type: SET_REPETITIONS_UPDATE_IS_LOADING, payload: true });

    return axios
      .put(`${process.env.REACT_APP_BACKEND_SOURCE}/cours/repetition/${item.id}`,item)
      .then(({data}) => {
        dispatch({ type: SET_REPETITIONS_UPDATE_IS_LOADING, payload: false });
        dispatch({ type: SET_REPETITIONS_UPDATE_IS_UPDATE, payload: true });
        dispatch({ type: SET_REPETITIONS_UPDATE_ITEM, payload: data });
        dispatch({ type: SET_REPETITIONS_UPDATE_MESSAGE, payload: "Repetition is update" });
      })
      .catch((err) => {
        dispatch({ type: SET_REPETITIONS_UPDATE_IS_UPDATE, payload: false });
        dispatch({ type: SET_REPETITIONS_UPDATE_IS_LOADING, payload: false });
        dispatch({ type: SET_REPETITIONS_UPDATE_ITEM, payload: {} });
        dispatch({ type: SET_REPETITIONS_UPDATE_MESSAGE, payload: "Repetition not update" });
      });
  };
};
