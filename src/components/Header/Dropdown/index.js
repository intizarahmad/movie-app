import React, { Component } from 'react';
import PropsTypes from 'prop-types';
import { connect } from 'react-redux';
import { setOrderBy } from '../../../actions/movie/actionsDispatchers';

class Dropdown extends Component {
  onChandeHandler = e => {
    const { value } = e.target;
    const { orderBy } = this.props;
    orderBy(value);
  };

  render() {
    return (
      <div className="col-md-6 col-sm-6 form-group select-container">
        <label className="form-label" htmlFor="sorting"> </label>
          <select className="form-control" id="sorting" onChange={this.onChandeHandler}>
            <option value="1">Ascending</option>
            <option value="-1">Decending</option>
          </select>
       
      </div>
    );
  }
}
Dropdown.propsTypes = {
  orderBy: PropsTypes.func,
};
const mapStateToProps = null;
const mapDipatchToProps = dispatch => {
  return {
    orderBy: value => dispatch(setOrderBy(value)),
  };
};
export default connect(mapStateToProps, mapDipatchToProps)(Dropdown);
