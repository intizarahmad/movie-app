import axios from '../utils/config';
import endPoint from '../utils/endpoints';

export const getMovieList = page => {
  return axios
    .get(endPoint.getMovieList(page))
    .then(response => {
      return Promise.resolve(response.data);
    })
    .catch(error => {
      return Promise.reject(error);
    });
};

export default {
  getMovieList,
};
