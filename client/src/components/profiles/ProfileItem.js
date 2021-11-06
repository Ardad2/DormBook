import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    major,
    year,
    dorm,
    hometown,
    interests
  }
}) => {
  return (
    <Link to={`/profile/${_id}`} >
    <div className='profile bg-primary'>
      <img src={avatar} alt='' className='round-img' />
      <div>
        <h2>{name}</h2>
        <h3>N/A</h3>
        <p>
        {major && <span>{major}</span>} {year} living in {dorm && <span>{dorm}</span>}
        </p>
        <p>From {hometown && <span> {hometown}</span>}</p>
      </div>
      <p>
        <h1>Interests/Hobbies</h1>
        {interests.slice(0, 4).map((interests, index) => (
          <p key={index} className='text-secondary'>{interests}
          </p>
        ))}

      </p>
    </div>
    </Link>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;