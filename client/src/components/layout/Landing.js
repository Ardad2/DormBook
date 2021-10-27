import React from "react";
import { Redirect, Link } from "react-router-dom";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const onSubmit = async (e) => {
    return <Redirect to="/Login"/>

};

const Landing = ({ isAuthenticated }) => {

  if (isAuthenticated) {
    return <Redirect to='/dashboard'/>
  }

  return (
    <section className="landing">
      <div className="dark-overlay">
      <div className="intro-text">
          <h1 className="x-large">DormBook</h1>
          <p className="lead">
            Keep in touch with your Dormmates in your own personalized social
            media!
          </p>
          </div>
        <div className="landing-inner">
          <div className="buttons">
      <h1 className="large text-primary">
        <i className="fas fa-user"></i> Sign Into Your Account
      </h1>
      <form className="form" onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            minLength="6"
            required
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Login" />
      </form>
      <p className="my-1">
        Don't have an account? <p className="btn btn-primary"><Link to="/register">Register an account</Link></p>
      </p>
          </div>
        </div>
      </div>
    </section>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
