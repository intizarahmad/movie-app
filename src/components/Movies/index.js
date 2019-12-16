import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Movie from './Movie';
import { getMovieListAction } from '../../actions/movie/actionsDispatchers';

class Movies extends React.Component {
  componentDidMount() {
    const { getMovieList } = this.props;
    getMovieList(0);
  }

  render() {
    const { movies } = this.props;
    const { filteredMovie } = movies;
    return (
      <div className="result-container">
        <div className="row">
          {filteredMovie
            && filteredMovie.map(movie => {
              return <Movie movie={movie} />;
            })}
        </div>
      </div>
    );
  }
}
Movies.propTypes = {
  getMovieList: PropTypes.func.isRequired,
  movies: PropTypes.object,
};
const mapStateToProps = state => {
  return {
    movies: state.movies,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getMovieList: value => dispatch(getMovieListAction(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
