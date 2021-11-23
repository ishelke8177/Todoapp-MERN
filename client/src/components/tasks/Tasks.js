import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import { getTasks } from '../../actions/taskActions';

import TaskItem from './TaskItem';

const Tasks = ({ task: { tasks, loading }, getTasks }) => {
  useEffect(() => {
    getTasks();
  }, [getTasks]);

  if (loading || tasks === null) {
    return <Spinner />;
  }

  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <ul className="collection with-header">
        <li className="collection-header">
          <h4 className="center">Your Tasks</h4>
        </li>
        {!loading && tasks.length === 0 ? (
          <p className="center">No tasks to show...</p>
        ) : (
          tasks.map((task) => <TaskItem task={task} key={task._id} />)
        )}
      </ul>
    </Fragment>
  );
};

Tasks.propTypes = {
  getTasks: PropTypes.func.isRequired,
  task: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  task: state.task,
});

export default connect(mapStateToProps, { getTasks })(Tasks);
