import axios from "axios";
import { SET_AUTH_IS_AUTH, SET_AUTH_IS_LOADING, SET_AUTH_IS_REGISTER, SET_AUTH_MESSAGE, SET_AUTH_MESSAGE_TYPE, SET_AUTH_PRICE, SET_AUTH_REGISTER_STEP, SET_AUTH_RESET, SET_AUTH_TOKEN, SET_AUTH_USER, SET_AUTH_USER_TYPE } from "../mutation";

export const register = (item) => {
  return (dispatch) => {
    dispatch({ type: SET_AUTH_RESET});

    dispatch({ type: SET_AUTH_IS_LOADING, payload: true });
    dispatch({ type: SET_AUTH_MESSAGE, payload: "Inscription en  cour ..." });
    dispatch({ type: SET_AUTH_MESSAGE_TYPE, payload: "primary" });

    return axios
      .get(`${process.env.REACT_APP_API_URL}/users`)
      .then(({data}) => {
        const userAuth = data.find((user)=> user.email === item.email)

        if(userAuth == undefined || userAuth == {} || userAuth == null || userAuth.length == 0){
          dispatch({ type: SET_AUTH_MESSAGE, payload: "Patientez quelques secondes,votre inscription est en  cour ..." });
          dispatch({ type: SET_AUTH_MESSAGE_TYPE, payload: "primary" });
          axios.post(`${process.env.REACT_APP_API_URL}/users`,item)
          .then(({data})=>{
            dispatch({ type: SET_AUTH_RESET});
            dispatch({ type: SET_AUTH_IS_REGISTER,payload:true});
            dispatch({ type: SET_AUTH_MESSAGE, payload: "Bienvenu sur LAHACADEMIA,Connectez-vous pour continuer..." });
            dispatch({ type: SET_AUTH_MESSAGE_TYPE, payload: "success" });
            
          }).catch((err)=>{
            dispatch({ type: SET_AUTH_RESET});
            dispatch({ type: SET_AUTH_MESSAGE, payload: "Une erreur s'est produite,Veuillez ressayer" });
            dispatch({ type: SET_AUTH_MESSAGE_TYPE, payload: "warning" });
          })
          

        }else{
          dispatch({ type: SET_AUTH_RESET});
          dispatch({ type: SET_AUTH_MESSAGE, payload: "L'inscription avec l'email <b> "+item.email+"</b> n'est pas possible" });
          dispatch({ type: SET_AUTH_MESSAGE_TYPE, payload: "danger" });
        }
      })
      .catch((err) => {
        dispatch({ type: SET_AUTH_RESET});
        dispatch({ type: SET_AUTH_MESSAGE, payload: err.message });
      });
  };
};
export const checkCompte = (item) => {
  return (dispatch) => {
    dispatch({ type: SET_AUTH_RESET});

    dispatch({ type: SET_AUTH_IS_LOADING, payload: true });
    dispatch({ type: SET_AUTH_MESSAGE, payload: "Inscription en  cour ..." });
    dispatch({ type: SET_AUTH_MESSAGE_TYPE, payload: "primary" });

    return axios
      .get(`${process.env.REACT_APP_API_URL}/users`)
      .then(({data}) => {
        const userAuth = data.find((user)=> user.email === item.email)

        if(userAuth == undefined || userAuth == {} || userAuth == null || userAuth.length == 0){
          dispatch({ type: SET_AUTH_RESET});

          dispatch({ type: SET_AUTH_MESSAGE, payload: "Super.., une autre etape" });

          dispatch({ type: SET_AUTH_MESSAGE_TYPE, payload: "primary" });
          dispatch({type:SET_AUTH_REGISTER_STEP,payload:1})
        }else{
          dispatch({ type: SET_AUTH_RESET});
          dispatch({ type: SET_AUTH_MESSAGE, payload: "L'inscription avec l'email  "+item.email+" n'est pas possible" });
          dispatch({ type: SET_AUTH_MESSAGE_TYPE, payload: "danger" });
        }
      })
      .catch((err) => {
        dispatch({ type: SET_AUTH_RESET});
        dispatch({ type: SET_AUTH_MESSAGE, payload: err.message });
      });
  };
};
