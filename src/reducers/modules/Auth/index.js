import {
  SET_AUTH_IS_LOADING,
  SET_AUTH_IS_AUTH,
  SET_AUTH_TOKEN,
  SET_AUTH_USER,
  SET_AUTH_PRICE,
  SET_AUTH_USER_TYPE,
  SET_AUTH_RESET,
  SET_AUTH_MESSAGE_TYPE,
  SET_AUTH_MESSAGE,
  SET_AUTH_IS_REGISTER,
  SET_AUTH_REGISTER_STEP,
} from "./mutation";


const initialeState = {
  isLoading:false,
  isAuth:false,
  token:"",
  user:{},
  message:'',
  userType:"",
  messageType:"",
  price:null,
  isRegister:false,
  registerStep:0,
};

export default function authReducer(state = initialeState, action) {
  switch (action.type) {

    case SET_AUTH_IS_LOADING:
      return { ...state,  isLoading: action.payload };
    case SET_AUTH_IS_AUTH:
      return { ...state,  isAuth: action.payload };
    case SET_AUTH_IS_REGISTER:
      return { ...state,  isRegister: action.payload };
    case SET_AUTH_REGISTER_STEP:
      return { ...state,  registerStep: action.payload };
    case SET_AUTH_TOKEN:
      return { ...state,  token: action.payload };
    case SET_AUTH_USER:
      return { ...state,  user: action.payload };
    case SET_AUTH_PRICE:
      return { ...state,  price: action.payload };
    case SET_AUTH_USER_TYPE:
      return { ...state,  userType: action.payload };
    case SET_AUTH_MESSAGE_TYPE:
      return { ...state,  messageType: action.payload };
    case SET_AUTH_MESSAGE:
      return { ...state,  message: action.payload };
   
    case SET_AUTH_RESET:
      return initialeState;
    default:
      return state;
  }
}
