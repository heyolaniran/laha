import axios from "axios";
import {
  SET_REPETITIONS_DELETE_IS_LOADING,
  SET_REPETITIONS_DELETE_IS_DELETE,
  SET_REPETITIONS_DELETE_ITEM,
  SET_REPETITIONS_DELETE_MESSAGE,
  SET_REPETITIONS_DELETE_RESET,
} from "./mutation";

export const deleteRepetition = (id) => {
  return (dispatch) => {
    dispatch({type: SET_REPETITIONS_DELETE_RESET})
    dispatch({ type: SET_REPETITIONS_DELETE_IS_LOADING, payload: true });
    return axios.get(`${process.env.REACT_APP_SANCTUM}/sanctum/csrf-cookie`).then((response) => {
            return axios
            .delete(`${process.env.REACT_APP_BACKEND_SOURCE}/cours/repetition/${id}`)
            .then((res) => {
              dispatch({ type: SET_REPETITIONS_DELETE_IS_LOADING, payload: false });
              dispatch({ type: SET_REPETITIONS_DELETE_IS_DELETE, payload: true });
              dispatch({ type: SET_REPETITIONS_DELETE_ITEM, payload: res.data });
              dispatch({ type: SET_REPETITIONS_DELETE_MESSAGE, payload: "Repetition is delete" });
            })
            .catch((err) => {
              dispatch({ type: SET_REPETITIONS_DELETE_IS_LOADING, payload: false });
              dispatch({ type: SET_REPETITIONS_DELETE_IS_DELETE, payload: false });
              dispatch({ type: SET_REPETITIONS_DELETE_MESSAGE, payload: err.message });
            });
       
    })
  };
};
