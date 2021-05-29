import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store';
// import { login, logout, signup } from './util/session_api_util';
import { loginUser, logoutUser, signupUser } from './actions/session_actions';

import Root from './components/root';

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);

  window.loginUser = loginUser;
  window.logoutUser = logoutUser;
  window.signupUser = signupUser;
});