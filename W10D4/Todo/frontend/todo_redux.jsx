import configureStore from "./store/store";
import * as ReceiveTodos from "./actions/todo_actions";
import * as ReceiveSteps from "./actions/step_actions";
import {allTodos} from "./reducers/selectors";
import Root from "./components/root"
import ReactDOM from "react-dom"
import React from "react"

document.addEventListener("DOMContentLoaded", () => {
    const store = configureStore();
    window.store = store;
    window.ReceiveTodos = ReceiveTodos;
    window.ReceiveSteps = ReceiveSteps;
    window.allTodos = allTodos;
    const contentEle = document.getElementById("content")
    ReactDOM.render(<Root store={store}/>, contentEle);
})

