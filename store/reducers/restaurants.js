import PRODUCTS from "../../data/dummy-data";

import { SET_RESTAURANT, SWITCH_CATEGORY, FILTER_CATEGORY, CLEAR_RESTAURANTS } from "../actions/restaurants";

const initialState = {
    allRestaurants: PRODUCTS,
    selectedRestaurant: null,
    selectedMenu: null,
};

export default (state = initialState, action) => {
    switch(action.type) {
        case CLEAR_RESTAURANTS:
            return { ...state, allRestaurants: [] }
        case FILTER_CATEGORY:
            return {...state, allRestaurants: action.restaurants};
        case SET_RESTAURANT:
            return { ...state, selectedRestaurant: action.restaurant, selectedMenu: action.restaurant.menu.mains };
        case SWITCH_CATEGORY:
            let menuCategory = null;
            let menu = state.selectedRestaurant.menu;
            switch (action.category) {
                case "mains":
                    menuCategory = menu.mains;
                    break;
                case "appetizers":
                    menuCategory = menu.appetizers;
                    break;
                case "desserts":
                    menuCategory = menu.desserts;
                    break;
                case "drinks":
                    menuCategory = menu.drinks;
                    break;
                default:
                    menuCategory = menu.mains;
            }
            return { ...state, selectedMenu: menuCategory };
        default:
            return state;
    }
};