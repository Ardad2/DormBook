import React from "react";

const Landing = () => {
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">DormBook</h1>
          <p className="lead">
            Keep in touch with your Dormmates in your own personalized social
            media!
          </p>
          <div className="buttons">
            <a href="register.html" className="btn btn-primary">
              Register
            </a>
            <a href="login.html" className="btn btn-light">
              Sign In
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
