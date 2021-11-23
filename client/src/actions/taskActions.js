import axios from 'axios';
import {
  ADD_TASK,
  CLEAR_CURRENT,
  DELETE_TASK,
  GET_TASK,
  GET_TASKS,
  SET_CURRENT,
  SET_LOADING,
  TASK_ERROR,
  UPDATE_TASK,
} from './types';

// get tasks
export const getTasks = () => async (dispatch) => {
  try {
    setLoading();

    const res = await axios.get('/api/tasks');

    dispatch({
      type: GET_TASKS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: TASK_ERROR,
      payload: err.response.msg,
    });
  }
};

// Get task
export const getTask = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/tasks/${id}`);

    dispatch({
      type: GET_TASK,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: TASK_ERROR,
      payload: err.response.msg,
    });
  }
};

// add task
export const addTask = (task) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    setLoading();

    const res = await axios.post('/api/tasks', task, config);

    dispatch({
      type: ADD_TASK,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: TASK_ERROR,
      payload: err.response.msg,
    });
  }
};

// delete task
export const deleteTask = (id) => async (dispatch) => {
  try {
    setLoading();

    await axios.delete(`/api/tasks/${id}`);

    dispatch({
      type: DELETE_TASK,
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: TASK_ERROR,
      payload: err.response.msg,
    });
  }
};

// update task
export const updateTask = (task) => async (dispatch) => {
  try {
    setLoading();

    const res = await axios.put(`/api/tasks/${task.id}`, task);

    dispatch({
      type: UPDATE_TASK,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: TASK_ERROR,
      payload: err.response.msg,
    });
  }
};

// Set current task
export const setCurrent = (task) => {
  return {
    type: SET_CURRENT,
    payload: task,
  };
};

// Clear current task
export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT,
  };
};

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
