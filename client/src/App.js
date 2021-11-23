import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/auth/Login';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import Navbar from './components/layout/Navbar';
import Register from './components/auth/Register';
import AddTaskForm from './components/tasks/AddTaskForm';
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/authActions';
import setAuthToken from './utils/setAuthToken';
import Home from './components/pages/Home';
import UpdateTask from './components/tasks/UpdateTask';
import { connect } from 'react-redux';
import { Navigate } from 'react-router';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = ({ isAuthenticated }) => {
  useEffect(() => {
    store.dispatch(loadUser());
    M.AutoInit();
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route
            exact
            path="/add-task"
            element={
              !isAuthenticated ? <Navigate to="/login" /> : <AddTaskForm />
            }
          />
        </Routes>
        <UpdateTask />
      </Router>
    </Provider>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(App);
