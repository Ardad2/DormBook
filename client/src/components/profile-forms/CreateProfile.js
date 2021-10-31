import React, { useEffect, useState, Fragment } from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile, getCurrentProfile } from '../../actions/profile';

const CreateProfile = ({
	createProfile,
	getCurrentProfile,
	profile: { profile, loading },
	history
}) => {
	const [formData, setFormData] = useState({
		company: '',
		website: '',
		location: '',
		status: '',
		skills: '',
		githubusername: '',
		bio: '',
		twitter: '',
		facebook: '',
		linkedin: '',
		youtube: '',
		instagram: ''
	});
	const [displaySocialInputs, toggleSocialInputs] = useState(false);
	const {
		company,
		website,
		location,
		status,
		skills,
		githubusername,
		bio,
		twitter,
		facebook,
		linkedin,
		youtube,
		instagram
	} = formData;
	const onChange = e =>
		setFormData({ ...formData, [e.target.name]: e.target.value });
	const onSubmit = e => {
		e.preventDefault();
		createProfile(formData, history);
	};
	useEffect(() => {
		getCurrentProfile();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [getCurrentProfile]);
	return loading && profile === null ? (
		<Redirect to='/dashboard' />
	) : (
		<Fragment>
			<h1 className='large text-primary'>Profile Set Up</h1>
			<p className='lead'>
				 Tells us more about yourself
			</p>
			<form className='form' onSubmit={e => onSubmit(e)}>
				<div className='form-group'>
                <p className='form-text'>
						What year are you in college?
					</p>
					<select name='status' value={status} onChange={e => onChange(e)}>
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
						name='company'
						value={company}
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
						name='website'
						value={website}
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
						name='location'
						value={location}
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
						name='skills'
						value={skills}
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
						Add some social networks if you want?
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
							<i className='fab fa-twitter fa-2x' />
							<input
								type='text'
								placeholder='Twitter URL'
								name='twitter'
								value={twitter}
								onChange={e => onChange(e)}
							/>
						</div>

						<div className='form-group social-input'>
							<i className='fab fa-facebook fa-2x' />
							<input
								type='text'
								placeholder='Facebook URL'
								name='facebook'
								value={facebook}
								onChange={e => onChange(e)}
							/>
						</div>

						<div className='form-group social-input'>
							<i className='fab fa-youtube fa-2x' />
							<input
								type='text'
								placeholder='YouTube URL'
								name='youtube'
								value={youtube}
								onChange={e => onChange(e)}
							/>
						</div>

						<div className='form-group social-input'>
							<i className='fab fa-discord fa-2x' />
							<input
								type='text'
								placeholder='Discord username'
								name='linkedin'
								value={linkedin}
								onChange={e => onChange(e)}
							/>
						</div>

						<div className='form-group social-input'>
							<i className='fab fa-instagram fa-2x' />
							<input
								type='text'
								placeholder='Instagram URL'
								name='instagram'
								value={instagram}
								onChange={e => onChange(e)}
							/>
						</div>
                        <div className='form-group social-input'>
							<i className='fab fa-twitch fa-2x' />
							<input
								type='text'
								placeholder='Twitch URL'
								name='instagram'
								value={instagram}
								onChange={e => onChange(e)}
							/>
						</div>
					</Fragment>
				)}

				<input type='submit' className='btn btn-success' />
				<Link className='btn btn-danger' to='/dashboard'>
					Go Back
				</Link>
			</form>
		</Fragment>
	);
};

CreateProfile.propTypes = {
	createProfile: PropTypes.func.isRequired,
	getCurrentProfile: PropTypes.func.isRequired,
	profile: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
	profile: state.profile
});
export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
	withRouter(CreateProfile)
);