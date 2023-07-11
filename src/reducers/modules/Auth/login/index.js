import axios from "axios";
import { SET_AUTH_IS_AUTH, SET_AUTH_IS_LOADING, SET_AUTH_MESSAGE, SET_AUTH_MESSAGE_TYPE, SET_AUTH_PRICE, SET_AUTH_RESET, SET_AUTH_TOKEN, SET_AUTH_USER, SET_AUTH_USER_TYPE } from "../mutation";
import { findList } from "../../../../utils";

export const login = (item) => {
  return (dispatch) => {
    dispatch({ type: SET_AUTH_RESET});

    dispatch({ type: SET_AUTH_IS_LOADING, payload: true });
    dispatch({ type: SET_AUTH_MESSAGE, payload: "Connexion en  cour ..." });
    dispatch({ type: SET_AUTH_MESSAGE_TYPE, payload: "primary" });

    return axios
      .get(`${process.env.REACT_APP_BACKEND_SOURCE}/users`)
      .then(({data}) => {
        const userAuth = data.find((user)=> user.email === item.email && user.password== item.password)

        if(userAuth == undefined || userAuth == {} || userAuth == null || userAuth.length == 0){
          dispatch({ type: SET_AUTH_IS_LOADING, payload: false });
          dispatch({ type: SET_AUTH_IS_AUTH, payload: false });
          dispatch({ type: SET_AUTH_MESSAGE, payload: "Email ou mot de passe incorrect,Réssayez ..." });
          dispatch({ type: SET_AUTH_MESSAGE_TYPE, payload: "danger" });

        }else{
          
          const letters = "AZERTYUIOPQSDFGHJKLMWXCVBN";
          const token  = Math.floor((Math.random()*(999-189))+189)+letters[Math.floor(Math.random()*22)]+letters[Math.floor(Math.random()*22)]+Math.floor((Math.random()*(999999-100000))+100000)+letters[Math.floor(Math.random()*22)]+Math.floor((Math.random()*(999999-100000))+100000)
          
          axios.put(`${process.env.REACT_APP_BACKEND_SOURCE}/users/${userAuth.id}`,{...userAuth,token}).then(()=>{
            localStorage.setItem('laha_token',token)
            dispatch({ type: SET_AUTH_TOKEN, payload: token });
            dispatch({ type: SET_AUTH_IS_LOADING, payload: false });
          dispatch({ type: SET_AUTH_MESSAGE, payload: "Bienvenu sur LAHACADEMIA..." });
          dispatch({ type: SET_AUTH_MESSAGE_TYPE, payload: "success" });
          dispatch({ type: SET_AUTH_IS_AUTH, payload: true });
          dispatch({ type: SET_AUTH_USER, payload: userAuth });
          dispatch({ type: SET_AUTH_USER_TYPE, payload: userAuth.role });
          dispatch({ type: SET_AUTH_PRICE, payload: userAuth.price });
          }).catch((err)=>{
            dispatch({ type: SET_AUTH_IS_LOADING, payload: false });
          dispatch({ type: SET_AUTH_IS_AUTH, payload: false });
          dispatch({ type: SET_AUTH_MESSAGE, payload: "Email ou mot de passe incorrect,Réssayez ..." });
          dispatch({ type: SET_AUTH_MESSAGE_TYPE, payload: "danger" });
          })
          
          
          
        }
      })
      .catch((err) => {
        dispatch({ type: SET_AUTH_RESET});
        dispatch({ type: SET_AUTH_MESSAGE, payload: err.message });
      });
  };
};
export const initAuth = (userAuth) => {
  return (dispatch) => {

      dispatch({ type: SET_AUTH_TOKEN, payload: userAuth.token });
      dispatch({ type: SET_AUTH_IS_LOADING, payload: false });
      dispatch({ type: SET_AUTH_MESSAGE, payload: "Bienvenu sur LAHACADEMIA..." });
      dispatch({ type: SET_AUTH_MESSAGE_TYPE, payload: "success" });
      dispatch({ type: SET_AUTH_IS_AUTH, payload: true });
      dispatch({ type: SET_AUTH_USER, payload: userAuth });
      dispatch({ type: SET_AUTH_USER_TYPE, payload: userAuth.role });
      dispatch({ type: SET_AUTH_PRICE, payload: userAuth.price });
         
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
