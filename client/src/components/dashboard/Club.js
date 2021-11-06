import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import moment from 'moment';
import { connect } from 'react-redux';
import { deleteClub } from '../../actions/profile';

const Club = ({ club, deleteClub }) => {
    const clubs = club.map(currClub => (
        <tr key={currClub._id}>
            <td>{currClub.company}</td>
            <td className='hide-sm'>{currClub.title}</td>
            <td>
                <Moment format='YYYY/MM/DD'>{moment.utc(currClub.from)}</Moment> -{' '}
                {currClub.to === null ? (
                    ' Now'
                ) : (
                    <Moment format='YYYY/MM/DD'>{moment.utc(currClub.to)}</Moment>
                )}
            </td>
            <td>
                <button
                    onClick={() => deleteClub(currClub._id)}
                    className='btn btn-danger'
                >
                    Delete
                </button>
            </td>
        </tr>
    ));

    return (
        <Fragment>
            <h2 className='my-2'>Experience Credentials</h2>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Company</th>
                        <th className='hide-sm'>Title</th>
                        <th className='hide-sm'>Years</th>
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
    deleteClub: PropTypes.func.isRequired,
};

export default connect(null, { deleteClub })(Club);