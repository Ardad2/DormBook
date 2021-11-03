import React from 'react';
import PropTypes from 'prop-types';
import formatDate from '../../utils/formatDate';

const ProfileClub = ({
  club: { name, position, campus, from, to, current, description }
}) => (
  <div>
    <h3 className="text-dark">{name}</h3>
    <p>
      {formatDate(from)} - {to ? formatDate(to) : 'Now'}
    </p>
    <p>
      <strong>Position: </strong> {position}
    </p>
    <p>
      <strong>Campus: </strong> {campus}
    </p>
    <p>
      <strong>Description: </strong> {description}
    </p>
  </div>
);

ProfileClub.propTypes = {
  club: PropTypes.object.isRequired
};

export default ProfileClub;
