import React, { Fragment, useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile, getCurrentProfile } from '../../actions/profile';

const EditProfile = ({
  profile: { profile, loading },
  createProfile,
  getCurrentProfile,
  history
}) => {
	const [formData, setFormData] = useState({
		dorm: '',
		major: '',
		hometown: '',
		year: '',
		interests: '',
		bio: '',
		youtube: '',
		twitter: '',
		facebook: '',
		instagram: '',
		tiktok: '',
		twitch: '',
		discord: ''
	});

  const [displaySocialInputs, toggleSocialInputs] = useState(false);

  useEffect(() => {
    getCurrentProfile();

    setFormData({
      dorm: loading || !profile.dorm ? '' : profile.dorm,
      major: loading || !profile.major ? '' : profile.major,
      hometown: loading || !profile.hometown ? '' : profile.hometown,
      year: loading || !profile.year ? '' : profile.year,
      interests: loading || !profile.interests ? '' : profile.interests.join(','),
      bio: loading || !profile.bio ? '' : profile.bio,
      youtube: loading || !profile.social ? '' : profile.social.youtube,
      twitter: loading || !profile.social ? '' : profile.social.twitter,
      facebook: loading || !profile.social ? '' : profile.social.facebook,
      instagram: loading || !profile.social ? '' : profile.social.instagram,
      tiktok: loading || !profile.social ? '' : profile.social.tiktok,
      twitch: loading || !profile.social ? '' : profile.social.twitch,
      discord: loading || !profile.social ? '' : profile.social.discord,
    });
  }, [loading, getCurrentProfile]);

  const {
		dorm,
		major,
		hometown,
		year,
		interests,
		bio,
		youtube,
		twitter,
		facebook,
		instagram,
		tiktok,
		twitch,
		discord
  } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    createProfile(formData, history, true);
  };

  return (
    <Fragment>
      <h1 className='large text-primary'>Edit Profile</h1>
      <p className='lead'>
        <i className='fas fa-user' /> Add some changes to your profile
      </p>
      <form className='form' onSubmit={e => onSubmit(e)}>
				<div className='form-group'>
                <p className='form-text'>
						What year are you in college?
					</p>
					<select name='year' value={year} onChange={e => onChange(e)}>
						<option value='0'>Please Select</option>
						<option value='Developer'>Pre-Freshman</option>
						<option value='Junior Developer'>Freshman</option>
						<option value='Senior Developer'>Sophomore</option>
						<option value='Manager'>Junior</option>
						<option value='Student or Learning'>Senior</option>
						<option value='Instructor'>Super Senior</option>
						<option value='Intern'>Grad Student</option>
						<option value='Other'>PHD Student</option>
					</select>
				</div>
				<div className='form-group'>
                <p className='form-text'>
						What dorm do you live in?
					</p>
					<input
						type='text'
						placeholder='Eg. Tooker'
						name='dorm'
						value={dorm}
						onChange={e => onChange(e)}
					/>
				</div>
				<div className='form-group'>
                <p className='form-text'>
						Whatis your major?
					</p>
					<input
						type='text'
						placeholder='Eg. Computer Science'
						name='major'
						value={major}
						onChange={e => onChange(e)}
					/>
				</div>
				<div className='form-group'>
                <p className='form-text'>
						Where are you from?
					</p>
					<input
						type='text'
						placeholder='Eg. Phoenix, AZ'
						name='hometown'
						value={hometown}
						onChange={e => onChange(e)}
					/>
				</div>
				<div className='form-group'>
                <p className='form-text'>
						What are some of your interests?
					</p>
					<input
						type='text'
						placeholder='Eg. Football, music, reading, hiking, painting'
						name='interests'
						value={interests}
						onChange={e => onChange(e)}
					/>
				</div>
				<div className='form-group'>
					<textarea
						placeholder='Write a short biography that makes you stand out!'
						name='bio'
						value={bio}
						onChange={e => onChange(e)}
					/>
				</div>

				<div className='my-2'>
                <p className='form-text'>
						Add some of your social network accounts
					</p>
					<button
						onClick={() => toggleSocialInputs(!displaySocialInputs)}
						type='button'
						className='btn btn-primary'
					>
						Add Social Network Links
					</button>
					<span>Optional</span>
				</div>
				{displaySocialInputs && (
					<Fragment>
						<div className='form-group social-input'>
							<i className='fab fa-youtube fa-2x' />
							<input
								type='text'
								placeholder=''
								name='youtube'
								value={youtube}
								onChange={e => onChange(e)}
							/>
						</div>
						<div className='form-group social-input'>
							<i className='fab fa-twitter fa-2x' />
							<input
								type='text'
								placeholder=''
								name='twitter'
								value={twitter}
								onChange={e => onChange(e)}
							/>
						</div>
						<div className='form-group social-input'>
							<i className='fab fa-facebook fa-2x' />
							<input
								type='text'
								placeholder=''
								name='facebook'
								value={facebook}
								onChange={e => onChange(e)}
							/>
						</div>
						<div className='form-group social-input'>
							<i className='fab fa-instagram fa-2x' />
							<input
								type='text'
								placeholder=''
								name='instagram'
								value={instagram}
								onChange={e => onChange(e)}
							/>
						</div>
						<div className='form-group social-input'>
							<i className='fab fa-tiktok fa-2x' />
							<input
								type='text'
								placeholder=''
								name='tiktok'
								value={tiktok}
								onChange={e => onChange(e)}
							/>
						</div>
						<div className='form-group social-input'>
							<i className='fab fa-twitch fa-2x' />
							<input
								type='text'
								placeholder=''
								name='twitch'
								value={twitch}
								onChange={e => onChange(e)}
							/>
						</div>
						<div className='form-group social-input'>
							<i className='fab fa-discord fa-2x' />
							<input
								type='text'
								placeholder=''
								name='discord'
								value={discord}
								onChange={e => onChange(e)}
							/>
						</div>
          </Fragment>
        )}

        <input type='submit' className='btn btn-success' />
        <Link className='btn btn-danger' to='/my-profile'>
          Return
        </Link>
      </form>
    </Fragment>
  );
};

EditProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { createProfile, getCurrentProfile }
)(withRouter(EditProfile));