import React from 'react';
import PropTypes from 'prop-types';
import timeAgo from '../../../utils/time.ago';

const index = props => {
  const { movie } = props;
  const { image, name, id, status, gender, created, species, origin, location } = movie;
  return (
    <div className="col-md-3 col-xs-6">
      <div className="result-info-container">
        <div className="image-container">
          <img src={image} alt={name} title={name} className="img-responsive" />
          <div className="description-container">
            <h2>{name}</h2>
            <p>
              Id: {id} - {timeAgo(created)}
            </p>
          </div>
        </div>
        <div className="detail-description">
          <ul>
            <li>
              <span className="description-label">Status</span>
              <span className="description-detail">{status}</span>
            </li>
            <li>
              <span className="description-label">Spieces</span>
              <span className="description-detail">{species}</span>
            </li>
            <li>
              <span className="description-label">Gender</span>
              <span className="description-detail">{gender}</span>
            </li>
            <li>
              <span className="description-label">Origin</span>
              <span className="description-detail">{origin.name}</span>
            </li>
            <li>
              <span className="description-label">Last Location</span>
              <span className="description-detail">{location.name}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
index.propTypes = {
  movie: PropTypes.object,
};

export default index;
