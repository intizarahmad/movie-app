import * as actionTypes from './actionTypes';
import { getMovieList } from '../../services/movies.services';

export const getMovieListAction = page => dispatch => {
  dispatch({ type: actionTypes.GET_MOVIES_INIT });
  getMovieList(page)
    .then(data => {
      dispatch({ type: actionTypes.GET_MOVIES_SUCCESS, payload: data });
    })
    .catch(() => {
      dispatch({
        type: actionTypes.GET_MOVIES_FAIL,
        payload: 'Error',
      });
    });
};

export const searchMovie = name => {
  return {
    type: actionTypes.SEARCH_MOVIE,
    payload: name,
  };
};
export const setOrderBy = value => {
  return {
    type: actionTypes.SET_ORDER_BY,
    payload: value,
  };
};
export default { getMovieListAction, searchMovie, setOrderBy };
