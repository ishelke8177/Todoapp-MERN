/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../../actions/authActions';

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    login(email, password);
  };

  // Redirect if login
  if (isAuthenticated) return <Navigate to="/" />;

  return (
    <div className="row" style={{ marginLeft: '650px', marginTop: '100px' }}>
      <form onSubmit={onSubmit}>
        <div className="row">
          <div className="input-field col s6">
            <input
              id="email"
              type="text"
              name="email"
              className="validate"
              value={email}
              onChange={(e) => onChange(e)}
            />
            <label htmlFor="email">Email</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <input
              id="password"
              type="password"
              name="password"
              className="validate"
              value={password}
              onChange={(e) => onChange(e)}
            />
            <label htmlFor="password">Password</label>
          </div>
        </div>
        <input
          type="submit"
          value="Login"
          className="waves-effect waves-light btn red"
          style={{ marginLeft: '50px' }}
          // onClick={onSubmit}
        />
        {/* <span style={{ color: 'white' }}>Login</span> */}
      </form>
      <p style={{ marginTop: '270px', marginLeft: '-200px' }}>
        Dont have an account? <Link to="/register">Register.</Link>
      </p>
    </div>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
