import {
  fetchMenuPending,
  fetchMenuSuccess,
  fetchMenuError,
} from "./store/actions/getMenuItems";

function fetchMenu() {
  return function (dispatch) {
    fetch("https://hangry-backend.herokuapp.com/")
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        dispatch(fetchMenuSuccess(res.data));
        return res.data;
      })
      .catch((error) => {
        dispatch(fetchMenuError(error));
      });
  };
}

export default fetchMenu;
