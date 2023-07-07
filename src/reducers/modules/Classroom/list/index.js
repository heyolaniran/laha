import axios from "axios";
import {
  SET_CLASSROOMS_LIST_ITEMS,
  SET_CLASSROOMS_LIST_SEARCH_ITEMS,
  SET_CLASSROOMS_LIST_META,
  SET_CLASSROOMS_LIST_LINKS,
  SET_CLASSROOMS_LIST_MESSAGE,
  SET_CLASSROOMS_LIST_IS_LOADING,
  SET_CLASSROOMS_LIST_RESET
} from "./mutation";
export const relationClassrooms = "_embed=cours";
export const getClassrooms = (pagination = false) => {
  return (dispatch) => {
    dispatch({ type: SET_CLASSROOMS_LIST_IS_LOADING, payload: true });

    return axios
      .get(
        `${process.env.BACKEND_SOURCE}/class${
          pagination ? "/" : "?"+relationClassrooms
        }`
      )
      .then(({data}) => {
        dispatch({ type: SET_CLASSROOMS_LIST_ITEMS, payload: data });
        dispatch({ type: SET_CLASSROOMS_LIST_IS_LOADING, payload: false });
        dispatch({ type: SET_CLASSROOMS_LIST_META, payload: [] });
        dispatch({ type: SET_CLASSROOMS_LIST_LINKS, payload: [] });
        dispatch({ type: SET_CLASSROOMS_LIST_MESSAGE, payload: "Liste des livres" });
      })
      .catch((err) => {
        dispatch({ type: SET_CLASSROOMS_LIST_IS_LOADING, payload: false });
        dispatch({ type: SET_CLASSROOMS_LIST_ITEMS, payload: [] });
        dispatch({ type: SET_CLASSROOMS_LIST_MESSAGE, payload: err.message });
      });
  };
};

export const getClassroom = (id) => {
  return (dispatch) => {
    dispatch({ type: SET_CLASSROOMS_LIST_IS_LOADING, payload: true });

    return axios
      .get(`${process.env.BACKEND_SOURCE}/classrooms/${id}`)
      .then(({data}) => {
        dispatch({ type: SET_CLASSROOMS_LIST_ITEMS, payload: data });
        dispatch({ type: SET_CLASSROOMS_LIST_IS_LOADING, payload: false });
        dispatch({ type: SET_CLASSROOMS_LIST_META, payload: [] });
        dispatch({ type: SET_CLASSROOMS_LIST_LINKS, payload: [] });
        dispatch({ type: SET_CLASSROOMS_LIST_MESSAGE, payload: "Liste des livres" });
      })
      .catch((err) => {
        dispatch({ type: SET_CLASSROOMS_LIST_IS_LOADING, payload: false });

        dispatch({ type: SET_CLASSROOMS_LIST_ITEMS, payload: [] });
        dispatch({ type: SET_CLASSROOMS_LIST_MESSAGE, payload: err.message });
      });
  };
};

export const getClassroomFiltre =(params)=>{
  return (dispatch) => {
    dispatch({ type: SET_CLASSROOMS_LIST_IS_LOADING, payload: true });

    return axios
      .get(
        `${process.env.BACKEND_SOURCE}/classrooms?pagination=false`
      )
      .then(({data}) => {
        var resultFiltre = data;
        params.forEach(param => {
          resultFiltre = resultFiltre.filter((rep)=> rep[param.name] == param.value)
        });
        console.log('resultD', resultFiltre)
        dispatch({ type: SET_CLASSROOMS_LIST_SEARCH_ITEMS, payload: resultFiltre });
        dispatch({ type: SET_CLASSROOMS_LIST_IS_LOADING, payload: false });
        dispatch({ type: SET_CLASSROOMS_LIST_META, payload: [] });
        dispatch({ type: SET_CLASSROOMS_LIST_LINKS, payload: [] });
        dispatch({ type: SET_CLASSROOMS_LIST_MESSAGE, payload: "Liste des livres" });

      })
      .catch((err) => {
        dispatch({ type: SET_CLASSROOMS_LIST_IS_LOADING, payload: false });
        dispatch({ type: SET_CLASSROOMS_LIST_ITEMS, payload: [] });
        dispatch({ type: SET_CLASSROOMS_LIST_MESSAGE, payload: err.message });
      });
  };
}

export const resetClassrooms = () => {
  return (dispatch) => {
    dispatch({ type: SET_CLASSROOMS_LIST_RESET, payload: true });
  };
};
