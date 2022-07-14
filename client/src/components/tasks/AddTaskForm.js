/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addTask } from '../../actions/taskActions';
import M from 'materialize-css/dist/js/materialize.min.js';

const AddTaskForm = ({ addTask }) => {
  const [task, setTask] = useState('');

  const onSubmit = () => {
    // console.log('submit');
    if (task === '') {
      M.toast({ html: 'Please enter a task' });
    } else {
      // console.log('before');
      addTask(task);
      // console.log('task');
      M.toast({ html: `Task added` });

      // Clear Fields
      setTask('');
    }
  };

  return (
    <div className="row" style={{ marginLeft: '665px', marginTop: '100px' }}>
      <form className="col s12">
        <div className="row">
          <div className="col s12">
            <div className="input-field inline">
              <input
                type="text"
                name="task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                className="validate"
              />
              <label htmlFor="email_inline">Add task</label>
            </div>
          </div>
        </div>
        <a
          className="waves-effect waves-light btn red"
          style={{ marginLeft: '50px' }}
          onClick={onSubmit}
        >
          <span style={{ color: 'white' }}>Add</span>
        </a>
      </form>
    </div>
  );
};

AddTaskForm.propTypes = {
  addTask: PropTypes.func.isRequired,
};

export default connect(null, { addTask })(AddTaskForm);
