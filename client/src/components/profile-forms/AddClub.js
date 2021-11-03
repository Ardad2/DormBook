import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addClub } from '../../actions/profile';

const AddClub = ({ addClub, history }) => {
  const [formData, setFormData] = useState({
    name: '',
    position: '',
    campus: '',
    from: '',
    to: '',
    current: false,
    description: ''
  });

  const { name, position, campus, from, to, current, description } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Fragment>
      <h1 className="large text-primary">Add Organizations</h1>
      <p className="lead">
        <i className="fas fa-code-branch" /> Add student organizations you are part of or where part of.
      </p>
      <form
        className="form"
        onSubmit={e => {
          e.preventDefault();
          addClub(formData, history);
        }}
      >
        <div className="form-group">
          <input
            type="text"
            placeholder="Position"
            name="position"
            value={position}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Club Name"
            name="name"
            value={name}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Campus"
            name="campus"
            value={campus}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <h4>From Date</h4>
          <input type="date" name="from" value={from} onChange={onChange} />
        </div>
        <div className="form-group">
          <p>
            <input
              type="checkbox"
              name="current"
              checked={current}
              value={current}
              onChange={() => {
                setFormData({ ...formData, current: !current });
              }}
            />{' '}
            Current Job
          </p>
        </div>
        <div className="form-group">
          <h4>To Date</h4>
          <input
            type="date"
            name="to"
            value={to}
            onChange={onChange}
            disabled={current}
          />
        </div>
        <div className="form-group">
          <textarea
            name="description"
            cols="30"
            rows="5"
            placeholder=""
            value={description}
            onChange={onChange}
          />
        </div>
        <input type="submit" className="btn btn-primary my-1" />
        <Link className="btn btn-success" to="/my-profile">
          Return
        </Link>
      </form>
    </Fragment>
  );
};

AddClub.propTypes = {
  addClub: PropTypes.func.isRequired
};

export default connect(null, { addClub })(AddClub);
