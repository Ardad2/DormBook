import { Alert } from "../layout/Alert"
import React, {Fragment, useState} from "react";
import { Redirect, Link } from "react-router-dom";
import { connect } from 'react-redux';
import { login } from '../../actions/auth';
import PropTypes from 'prop-types';
import Login from '../../components/auth/Login';

const Landing = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""});

  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    login(email, password);
  };

  if (isAuthenticated) {
    return <Redirect to='/posts'/>;
  }
  

  return (
    <Fragment>
    <div className="landing">
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
     <Login/>
          </div>
        </div>
      </div>
    </div>
    </Fragment>
  );
};

Landing.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login }) (Landing);
