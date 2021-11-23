/* eslint-disable import/no-anonymous-default-export */
import {
  ADD_TASK,
  UPDATE_TASK,
  DELETE_TASK,
  TASK_ERROR,
  GET_TASKS,
  SET_CURRENT,
  CLEAR_CURRENT,
} from '../actions/types';

const initialState = {
  tasks: null,
  current: null,
  loading: false,
  error: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_TASKS:
      return {
        ...state,
        tasks: payload,
        loading: false,
      };
    case ADD_TASK:
      console.log('add task');
      return {
        ...state,
        tasks: [payload, ...state.tasks],
        loading: false,
      };
    case TASK_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case UPDATE_TASK:
      console.log('update');
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task._id === payload.id ? payload : task
        ),
        loading: false,
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task._id !== payload),
        loading: false,
      };
    case SET_CURRENT:
      return {
        ...state,
        current: payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };
    default:
      return state;
  }
}
