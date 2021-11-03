import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    year,
    dorm,
    hometown,
    interests
  }
}) => {
  return (
    <div className='profile bg-light'>
      <img src={avatar} alt='' className='round-img' />
      <div>
        <h2>{name}</h2>
        <p>
          {year} {major && <span> majoring in {major} from </span>}{dorm && <span>{dorm}</span>}
        </p>
        <p className='my-1'>{hometown && <span>from {hometown}</span>}</p>
        <Link to={`/profile/${_id}`} className='btn btn-primary'>
          View
        </Link>
      </div>
      <ul>
        {interests.slice(0, 4).map((interests, index) => (
          <li key={index} className='text-primary'>
            <i className='fas fa-circle' /> {interests}
          </li>
        ))}
      </ul>
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;