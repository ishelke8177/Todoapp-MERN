import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/authActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul id="nav-mobile" className="right hide-on-med-and-down">
      <li>
        <Link to="/login" onClick={logout}>
          Logout
        </Link>
      </li>
      <li>
        <Link to="/add-task">Add task</Link>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul id="nav-mobile" className="right hide-on-med-and-down">
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/add-task">Add task</Link>
      </li>
    </ul>
  );

  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">
          TaskApp
        </Link>
        {!loading && (
          <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
        )}
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
