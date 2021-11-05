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
		createProfile(formData, history);
	};
	useEffect(() => {
		getCurrentProfile();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [getCurrentProfile]);
	return loading && profile === null ? (
		<Redirect to='/my-profile' />
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
					<select name='year' value={year} onChange={e => onChange(e)}>
						<option value='0'> Select</option>
						<option value='Pre-Freshman'>Pre-Freshman</option>
						<option value='Freshman'>Freshman</option>
						<option value='Sophomore'>Sophomore</option>
						<option value='Junior'>Junior</option>
						<option value='Senior'>Senior</option>
						<option value='Super Senior'>Super Senior</option>
						<option value='Grad Student'>Grad Student</option>
						<option value='PHD Student'>PHD Student</option>
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