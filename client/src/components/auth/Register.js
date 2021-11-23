/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { register } from '../../actions/authActions';

const Register = ({ isAuthenticated, register }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const { name, email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    register({ name, email, password });
  };

  // Redirect upon register
  if (isAuthenticated) return <Navigate to="/login" />;

  return (
    <div className="row" style={{ marginLeft: '650px', marginTop: '100px' }}>
      <form>
        <div className="row">
          <div className="input-field col s6">
            <input
              type="text"
              name="name"
              className="validate"
              value={name}
              onChange={onChange}
            />
            <label htmlFor="name">Name</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <input
              type="email"
              name="email"
              className="validate"
              value={email}
              onChange={onChange}
            />
            <label htmlFor="email">Email</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <input
              name="password"
              type="password"
              className="validate"
              value={password}
              onChange={onChange}
            />
            <label htmlFor="password">Password</label>
          </div>
        </div>
        <a
          className="waves-effect waves-light btn red"
          style={{ marginLeft: '50px' }}
          onClick={onSubmit}
        >
          <span style={{ color: 'white' }}>Register</span>
        </a>
      </form>
    </div>
  );
};

Register.propTypes = {
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { register })(Register);
