import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <div className="intro-text">
          <h1 className="x-large">DormBook</h1>
          <p className="lead">
            Keep in touch with your Dormmates in your own personalized social
            media!
          </p>
          </div>
          <div className="buttons">
            <Link to="/register" className="btn btn-primary">
              Register
            </Link>
            <Link to="/login" clLinkssName="btn btn-light">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
