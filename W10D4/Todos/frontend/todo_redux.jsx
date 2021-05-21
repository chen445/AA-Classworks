import configureStore from "./store/store";
import * as ReceiveTodos from "./actions/todo_actions";
import * as ReceiveSteps from "./actions/step_actions";

document.addEventListener("DOMContentLoaded", () => {
    const store = configureStore();
    window.store = store;
    window.ReceiveTodos = ReceiveTodos;
    window.ReceiveSteps = ReceiveSteps;
})