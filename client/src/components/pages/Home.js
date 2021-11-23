import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Tasks from '../tasks/Tasks';

const Home = ({ isAuthenticated }) => {
  return (
    <div>
      {!isAuthenticated ? (
        <Fragment>
          <div
            className="center"
            style={{ marginTop: '100px', fontSize: '20px' }}
          >
            To see your tasks you must login first
          </div>
        </Fragment>
      ) : (
        <Tasks />
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Home);
