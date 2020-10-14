export const FETCH_MENU_PENDING = "FETCH_MENU_PENDING";
export const FETCH_MENU_SUCCESS = "FETCH_MENU_SUCCESS";
export const FETCH_MENU_ERROR = "FETCH_MENU_ERROR";

function fetchMenuPending() {
  return {
    type: FETCH_MENU_PENDING,
  };
}

function fetchMenuSuccess(data) {
  return {
    type: FETCH_MENU_SUCCESS,
    data: data,
  };
}

function fetchMenuError(error) {
  return {
    type: FETCH_MENU_ERROR,
    error: error,
  };
}
