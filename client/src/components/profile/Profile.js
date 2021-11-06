import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Loading from '../layout/Loading';
import ProfileTop from './ProfileTop';
import ProfileClub from './ProfileClub';
import { getProfileById } from '../../actions/profile';

const Profile = ({
  getProfileById,
  profile: { profile, loading },
  auth,
  match
}) => {
  useEffect(() => {
    getProfileById(match.params.id);
  }, [getProfileById, match.params.id]);

  return (
    <Fragment>
      {profile === null || loading ? (
        <Loading />
      ) : (
        <Fragment>
          <Link to='/profiles' className='btn btn-primary'>
            Go to user list
          </Link>
          {auth.isAuthenticated &&
            auth.loading === false &&
            auth.user._id === profile.user._id && (
              <Link to='/edit-profile' className='btn btn-success'>
               <i class="fa fa-pencil" aria-hidden="true"></i> Edit Profile
              </Link>
            )}
                      <div className='profile-grid my-3'>
            <ProfileTop profile={profile} />
            </div>

            <div className='profile-about bg-white p-2'>
              <h2 className='text-primary'>About</h2>
              <p>{profile.about}</p>
          </div>
          <div className='profile-exp bg-white p-2'>
              <h2 className='text-primary'>Message Wall</h2>
              {profile.clubs.length > 0 ? (
                <Fragment>
                  {profile.club.map(club => (
                    <ProfileClub
                      key={club._id}
                      club={club}
                    />
                  ))}
                </Fragment>
              ) : (
                <h4>This user does not report any student organizations.</h4>
              )}
          
          </div>            
            <div className='profile-exp bg-white p-2'>
              <h2 className='text-primary'>Organizations</h2>
              {profile.clubs.length > 0 ? (
                <Fragment>
                  {profile.club.map(club => (
                    <ProfileClub
                      key={club._id}
                      club={club}
                    />
                  ))}
                </Fragment>
              ) : (
                <h4>This user does not report any student organizations.</h4>
              )}
          
          </div>
          <div className='profile-exp bg-white p-2'>
              <h2 className='text-primary'>Friends</h2>
              {profile.clubs.length > 0 ? (
                <Fragment>
                  {profile.club.map(club => (
                    <ProfileClub
                      key={club._id}
                      club={club}
                    />
                  ))}
                </Fragment>
              ) : (
                <h4>This user does not report any student organizations.</h4>
              )}
          
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

Profile.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getProfileById }
)(Profile);