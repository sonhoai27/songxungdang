import { REQUEST, FAILURE, SUCCESS } from "../utils/action-type-util";
import axios from "axios";
import { API } from "../config/const";
export const ACTION_TYPES = {
  IS_DANGER: "ReInit/IS_DANGER",
  IS_SUCCESS: "ReInit/IS_SUCCESS",
  IS_LOADING: "ReInit/IS_LOADING",
  API_LIST_PAGE_UI: "ReInit/API_LIST_PAGE_UI",
  API_LIST_SCHE: 'ReInit/API_LIST_SCHE'
};
const initialState = {
  isSuccess: false,
  isDanger: false,
  resListPageUI: [],
  resListSche: []
};
export default (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.IS_DANGER: {
      return {
        ...state,
        isDanger: action.payload
      };
    }
    case ACTION_TYPES.IS_SUCCESS: {
      return {
        ...state,
        isSuccess: action.payload
      };
    }
    case ACTION_TYPES.IS_LOADING: {
      return {
        ...state,
        isLoading: action.payload
      };
    }

    case REQUEST(ACTION_TYPES.API_LIST_PAGE_UI): {
      return {
        ...state
      };
    }
    case FAILURE(ACTION_TYPES.API_LIST_PAGE_UI): {
      return {
        ...state
      };
    }
    case SUCCESS(ACTION_TYPES.API_LIST_PAGE_UI): {
      return {
        ...state,
        resListPageUI: action.payload.data
      };
    }
    // list sche
    case REQUEST(ACTION_TYPES.API_LIST_SCHE): {
      return {
          ...state
      }
    }
    case FAILURE(ACTION_TYPES.API_LIST_SCHE): {
      return {
          ...state
      }
    }
    case SUCCESS(ACTION_TYPES.API_LIST_SCHE): {
      return {
          ...state,
          resListSche: action.payload.data
      }
    }
    default:
      return state;
  }
};
const API_SOURCE = API+'source/'
const PAGEURL = API + "page";
export const reListPageUI = idPage => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.API_LIST_PAGE_UI,
    payload: axios.get(PAGEURL + "/detail/" + idPage)
  });
  return result;
};
export const reIsDanger = status => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.IS_DANGER,
    payload: status
  });
  return result;
};
export const reIsSuccess = status => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.IS_SUCCESS,
    payload: status
  });
  return result;
};
export const reIsLoading = status => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.IS_LOADING,
    payload: status
  });
  return result;
};
export const reListSche = (id) => async dispatch => {
  const result = await dispatch({
      type: ACTION_TYPES.API_LIST_SCHE,
      payload: axios.get(API_SOURCE+'all-sche/'+id)
  });
  return result;
};