import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { searchMovie } from '../../../actions/movie/actionsDispatchers';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    };
  }

  onChangeHandler = e => {
    this.setState(
      {
        searchText: e.target.value,
      },
      () => {
        const { searchText } = this.state;
        if (searchText === '') {
          const { searchByName } = this.props;
          searchByName('');
        }
      },
    );
  };

  onSearchHandler = () => {
    const { searchText } = this.state;
    const { searchByName } = this.props;
    if (searchByName !== '') {
      searchByName(searchText);
    }
  };

  render() {
    return (
      <div className="col-md-6 col-sm-6 Search-Box">
        <div className="form-group">
          <label className="form-label" htmlFor="search-by-name">
            Search By Name
          </label>
          <input
            type="search"
            className="form-control"
            id="search-by-name"
            placeholder="Search By Name"
            onChange={this.onChangeHandler}
          />

          <button
            type="button"
            className="btn btn-default search-btn"
            onClick={this.onSearchHandler}
          >
            Search
          </button>
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  searchByName: PropTypes.func,
};

const mapStateToProps = null;
const mapDispatchToProps = dispatch => {
  return {
    searchByName: name => dispatch(searchMovie(name)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Search);
