const initialState = {
  countries: {
    BR: false,
    AU: false,
    CA: false,
    DE: false,
  },
  gender: "all",
};

const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_COUNTRY":
      return {
        ...state,
        countries: { ...state.countries, [action.payload]: true },
      };
    case "REMOVE_COUNTRY":
      return {
        ...state,
        countries: { ...state.countries, [action.payload]: false },
      };
    case "GENDER":
      return {
        ...state,
        gender: action.payload,
      };
    default:
      return state;
  }
};

export default filtersReducer;
