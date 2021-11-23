import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.min.js';
import { updateTask } from '../../actions/taskActions';

const UpdateTask = ({ current, updateTask }) => {
  const [name, setName] = useState('');

  useEffect(() => {
    if (current) {
      setName(current.name);
    }
  }, [current]);

  const onSubmit = () => {
    if (name === '') {
      M.toast({ html: 'Please enter the name' });
    } else {
      const updTask = {
        id: current._id,
        name,
      };

      updateTask(updTask);
      M.toast({ html: `Task updated` });

      // Clear Field
      setName('');
    }
  };

  return (
    <div id="update-task-modal" className="modal">
      <div className="modal-content">
        <h4>Update Your Task</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          onClick={onSubmit}
          className="modal-close waves-effect blue waves-light btn"
        >
          Update
        </a>
      </div>
    </div>
  );
};

UpdateTask.propTypes = {
  current: PropTypes.object.isRequired,
  updateTask: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  current: state.task.current,
});

export default connect(mapStateToProps, { updateTask })(UpdateTask);
