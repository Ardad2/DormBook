import React from 'react';
import PropTypes from 'prop-types';

const ProfileTop = ({
  profile: {
    year,
    dorm,
    hometown,
    major,
    social,
    user: { name, avatar }
  }
}) => {
  return (
    <div>
         <div className='profile-top bg-light p-4'>
      </div>
    <div className='profile-top bg-primary p-1'>
    <img className='round-img my-1' src={avatar} alt=''/>
      <h1>{name}</h1>
      <div className='icons my-1'>
        {major && (
          <a href={major} target='_blank' rel='noopener noreferrer'>
            <i className='fas fa-globe fa-2x' />
          </a>
        )}
        {social && social.youtube && (
          <a href={social.youtube} target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-youtube fa-2x' />
          </a>
        )}

{social && social.twitter && (
          <a href={social.twitter} target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-twitter fa-2x' />
          </a>
        )}
        {social && social.facebook && (
          <a href={social.twitter} target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-facebook fa-2x' />
          </a>
        )}
        {social && social.instagram && (
          <a href={social.instagram} target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-instagram fa-2x' />
          </a>
        )}
        {social && social.tiktok && (
          <a href={social.tiktok} target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-tiktok fa-2x' />
          </a>
        )}
        {social && social.twitch && (
          <a href={social.twitch} target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-twitch fa-2x' />
          </a>
        )}
        {social && social.discord && (
          <a href={social.discord} target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-discord fa-2x' />
          </a>
        )}

      </div>
    </div>
    </div>
  );
};

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileTop;