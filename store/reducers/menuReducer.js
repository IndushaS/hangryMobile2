import {
  FETCH_MENU_PENDING,
  FETCH_MENU_SUCCESS,
  FETCH_MENU_ERROR,
} from "../actions/getMenuItems";

const initialState = {
  pending: false,
  data: [],
  error: null,
};

export function menuReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_MENU_PENDING:
      return {
        ...state,
        pending: true,
      };
    case FETCH_MENU_SUCCESS:
      return {
        ...state,
        pending: false,
        data: action.payload,
      };
    case FETCH_MENU_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export const getMenu = (state) => state.data;
export const getMenuPending = (state) => state.pending;
export const getMenuError = (state) => state.error;
