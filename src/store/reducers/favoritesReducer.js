const initialState = {
  favList: [],
};

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FAVORITE":
      return {
        favList: [...state.favList, action.payload],
      };
    case "REMOVE_FAVORITE":
      return {
        ...state,
        favList: state.favList.filter((fav) => fav.email !== action.payload.email),
      };
    default:
      return state;
  }
};

export default favoritesReducer;
