import * as actionTypes from '../actions/movie/actionTypes';

const initialState = {
  results: [],
  info: null,
  filteredMovie: [],
  isLoading: false,
};

export default function(state = initialState, action = { type: '' }) {
  switch (action.type) {
    case actionTypes.GET_MOVIES_INIT: {
      return { ...state, isLoading: true, results: [], info: null };
    }

    case actionTypes.GET_MOVIES_SUCCESS: {
      return {
        ...state,
        results: action.payload.results,
        filteredMovie: action.payload.results,
        info: action.payload.info,
        isLoading: false,
      };
    }

    case actionTypes.SEARCH_MOVIE: {
      return {
        ...state,
        filteredMovie: state.results.filter(movie => {
          return movie.name.toLowerCase().includes(action.payload.toLowerCase());
        }),
      };
    }

    case actionTypes.SET_ORDER_BY: {
      return {
        ...state,
        filteredMovie: state.filteredMovie.sort((a, b) => {
          return action.payload < 0 ? b.id - a.id : a.id - b.id;
        }),
      };
    }

    default:
      return state;
  }
}
