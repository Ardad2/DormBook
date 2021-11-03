import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteClub } from '../../actions/profile';
import formatDate from '../../utils/formatDate';

const Club = ({ club, deleteClub }) => {
  const clubs = club.map((club) => (
    <tr key={club._id}>
      <td>{club.company}</td>
      <td className="hide-sm">{club.title}</td>
      <td>
        {formatDate(club.from)} - {club.to ? formatDate(club.to) : 'Now'}
      </td>
      <td>
        <button
          onClick={() => deleteClub(club._id)}
          className="btn btn-danger"
        >
          Delete
        </button>
      </td>
    </tr>
  ));

  return (
    <Fragment>
      <h2 className="my-2">Club Credentials</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th className="hide-sm">Position</th>
            <th className="hide-sm">Years</th>
            <th />
          </tr>
        </thead>
        <tbody>{clubs}</tbody>
      </table>
    </Fragment>
  );
};

Club.propTypes = {
  club: PropTypes.array.isRequired,
  deleteClub: PropTypes.func.isRequired
};

export default connect(null, { deleteClub })(Club);
