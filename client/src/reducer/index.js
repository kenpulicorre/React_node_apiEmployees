import { GET_DATA } from "../actions/index.js";

const initialState = {
  todosCountries: [],
  todosCountriesSinFiltro: [],

  textosAll: [],
  textos: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        todosCountries: action.payload,
        todosCountriesSinFiltro: action.payload,
      };

    default:
      return state;
  }
}
export default rootReducer;
