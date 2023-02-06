import {
  PAGINATION,
  RESET_PAGINATION,
  APP_LOADER,
  GET_CHARACTER,
} from "context/types";
export const initialState = {
  isLoading: false,
  filterOptions: {
    limit: 10, // paginate
    offset: 1, // page
  },
  character: {},
};
const AppReducer = (state, action) => {
  switch (action.type) {
    case GET_CHARACTER:
      return {
        ...state,
        character: action.payload,
      };

    case APP_LOADER:
      return {
        ...state,
        isLoading: action.payload,
      };

    case PAGINATION:
      return {
        ...state,
        filterOptions: action.payload || {},
      };

    case RESET_PAGINATION:
      return {
        ...state,
        filterOptions: {
          limit: 10,
          offset: 1,
        },
      };

    default:
      return state;
  }
};

export default AppReducer;
