import axios from "axios";
import { SET_AUTH_IS_AUTH, SET_AUTH_IS_LOADING, SET_AUTH_MESSAGE, SET_AUTH_MESSAGE_TYPE, SET_AUTH_PRICE, SET_AUTH_RESET, SET_AUTH_TOKEN, SET_AUTH_USER, SET_AUTH_USER_TYPE } from "../mutation";
import { findList } from "../../../../utils";

export const login = (item) => {

  return (dispatch) => {
    dispatch({ type: SET_AUTH_RESET});
    dispatch({ type: SET_AUTH_IS_LOADING, payload: true });
    dispatch({ type: SET_AUTH_MESSAGE, payload: "Connexion en  cour ..." });
    dispatch({ type: SET_AUTH_MESSAGE_TYPE, payload: "primary" });
    console.log(item)
    return axios.get(`${process.env.REACT_APP_SANCTUM}/sanctum/csrf-cookie`).then((response) => {
      return axios.post(`${process.env.REACT_APP_BACKEND_SOURCE}/auth/login`, item).then((data) => {
        console.log(data.data)
        if(data.data.status) {
          localStorage.setItem('laha_token',data.data.token)
          dispatch({ type: SET_AUTH_TOKEN, payload: data.data.token });
          dispatch({ type: SET_AUTH_IS_LOADING, payload: false });
        dispatch({ type: SET_AUTH_MESSAGE, payload: "Bienvenu sur GESCO..." });
        dispatch({ type: SET_AUTH_MESSAGE_TYPE, payload: "success" });
        dispatch({ type: SET_AUTH_IS_AUTH, payload: true });
        } else { 
          dispatch({ type: SET_AUTH_IS_LOADING, payload: false });
          dispatch({ type: SET_AUTH_IS_AUTH, payload: false });
          dispatch({ type: SET_AUTH_MESSAGE, payload: "Email ou mot de passe incorrect,Réssayez ..." });
          dispatch({ type: SET_AUTH_MESSAGE_TYPE, payload: "danger" });
        }
      })
    })
  }
};
export const initAuth = (data) => {
  return (dispatch) => {

      dispatch({ type: SET_AUTH_TOKEN, payload: data.token });
      dispatch({ type: SET_AUTH_IS_LOADING, payload: false });
      dispatch({ type: SET_AUTH_MESSAGE, payload: "Bienvenu sur GESCO..." });
      dispatch({ type: SET_AUTH_MESSAGE_TYPE, payload: "success" });
      dispatch({ type: SET_AUTH_IS_AUTH, payload: true });

         
  };
};
export const checkRole = (token,profil)=>{
  return  axios.get(`${process.env.REACT_APP_BACKEND_SOURCE}/users`).then(({data})=>{
    const userToken = findList(data,"token",token)
    if(userToken !== undefined){
      
      return userToken;
    }
    return false;
  }
  ).catch((ee)=>{
    return false;
  })
}
export const checkToken =async (token)=>{


    return  axios.get(`${process.env.REACT_APP_BACKEND_SOURCE}/users`).then(({data})=>{
      const userToken = findList(data,"token",token)
      if(userToken !== undefined){
        
        return userToken;
      }
      return false;
    }
    ).catch((ee)=>{
      return false;
    })
  
}
