import { SET_RESET } from "./mutation";
import {
  SET_USERS_LIST_IS_LOADING,
  SET_USERS_LIST_ITEMS,
  SET_USERS_LIST_LINKS,
  SET_USERS_LIST_MESSAGE,
  SET_USERS_LIST_META,
  SET_USERS_LIST_RESET,
} from "./list/mutation";
import {
  SET_USERS_CREATE_IS_CREATE,
  SET_USERS_CREATE_IS_LOADING,
  SET_USERS_CREATE_ITEM,
  SET_USERS_CREATE_MESSAGE,
  SET_USERS_CREATE_RESET,
} from "./create/mutation";
import {
  SET_USERS_UPDATE_IS_LOADING,
  SET_USERS_UPDATE_IS_UPDATE,
  SET_USERS_UPDATE_ITEM,
  SET_USERS_UPDATE_MESSAGE,
  SET_USERS_UPDATE_RESET,
} from "./update/mutation";
import {
  SET_USERS_DELETE_IS_DELETE,
  SET_USERS_DELETE_IS_LOADING,
  SET_USERS_DELETE_ITEM,
  SET_USERS_DELETE_MESSAGE,
  SET_USERS_DELETE_RESET,
} from "./delete/mutation";

const initialeState = {
  list: {
    isLoading: true,
    items: [],
    message: "",
    type: "",
    meta: [],
    links: [],
  },
  update: {
    isLoading: true,
    message: "",
    isUpdate: false,
    item: {},
  },
  delete: {
    isLoading: true,
    message: "",
    isDelete: false,
    item: {},
  },
  create: {
    isLoading: true,
    message: "",
    isCreate: false,
    item: {},
  },
};

export default function userReducer(state = initialeState, action) {
  switch (action.type) {
    //Create

    case SET_USERS_CREATE_IS_LOADING:
      return {
        ...state,
        create: { ...state.create, isLoading: action.payload },
      };
    case SET_USERS_CREATE_ITEM:
      return { ...state, create: { ...state.create, item: action.payload } };
    case SET_USERS_CREATE_IS_CREATE:
      return {
        ...state,
        create: { ...state.create, isCreate: action.payload },
      };
    case SET_USERS_CREATE_MESSAGE:
      return { ...state, create: { ...state.create, message: action.payload } };
    case SET_USERS_CREATE_RESET:
      return { ...state, create: initialeState.create };

    //Read
    case SET_USERS_LIST_IS_LOADING:
      return { ...state, list: { ...state.list, isLoading: action.payload } };
    case SET_USERS_LIST_ITEMS:
      return { ...state, list: { ...state.list, items: action.payload } };
    case SET_USERS_LIST_META:
      return { ...state, list: { ...state.list, meta: action.payload } };
    case SET_USERS_LIST_LINKS:
      return { ...state, list: { ...state.list, links: action.payload } };
    case SET_USERS_LIST_MESSAGE:
      return { ...state, list: { ...state.list, message: action.payload } };
    case SET_USERS_LIST_RESET:
      return { ...state, list: initialeState.list };

    //Update

    case SET_USERS_UPDATE_IS_LOADING:
      return {
        ...state,
        update: { ...state.update, isLoading: action.payload },
      };
    case SET_USERS_UPDATE_ITEM:
      return { ...state, update: { ...state.update, item: action.payload } };
    case SET_USERS_UPDATE_IS_UPDATE:
      return {
        ...state,
        update: { ...state.update, isUpdate: action.payload },
      };
    case SET_USERS_UPDATE_MESSAGE:
      return { ...state, update: { ...state.update, message: action.payload } };
    case SET_USERS_UPDATE_RESET:
      return { ...state, update: initialeState.update };

    //Delete
    case SET_USERS_DELETE_IS_LOADING:
      return {
        ...state,
        delete: { ...state.delete, isLoading: action.payload },
      };
    case SET_USERS_DELETE_ITEM:
      return { ...state, delete: { ...state.delete, item: action.payload } };
    case SET_USERS_DELETE_IS_DELETE:
      return {
        ...state,
        delete: { ...state.delete, isDelete: action.payload },
      };

    case SET_USERS_DELETE_MESSAGE:
      return { ...state, delete: { ...state.delete, message: action.payload } };
    case SET_USERS_DELETE_RESET:
      return { ...state, delete: initialeState.delete };

    case SET_RESET:
      return initialeState;
    default:
      return state;
  }
}
