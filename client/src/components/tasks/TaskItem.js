import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteTask, setCurrent } from '../../actions/taskActions';

import M from 'materialize-css/dist/js/materialize.min.js';

const TaskItem = ({ task, deleteTask, setCurrent }) => {
  const onDelete = () => {
    deleteTask(task._id);
    M.toast({ html: 'Task Deleted' });
  };

  return (
    <li className="collection-item">
      <div>
        <a href="#!">{task.name}</a>
        <a href="#!" className="secondary-content" onClick={onDelete}>
          <i
            className="material-icons grey-text"
            style={{ marginLeft: '20px' }}
          >
            delete
          </i>
        </a>
        <a
          href="#update-task-modal"
          className="secondary-content modal-trigger"
          onClick={() => setCurrent(task)}
        >
          <i className="large material-icons" style={{ fontSize: '20px' }}>
            border_color
          </i>
        </a>
      </div>
    </li>
  );
};

TaskItem.propTypes = {
  task: PropTypes.object.isRequired,
  deleteTask: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired,
};

export default connect(null, { deleteTask, setCurrent })(TaskItem);
