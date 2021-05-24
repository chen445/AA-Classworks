import {RECEIVE_TODOS} from "../actions/todo_actions";
import {RECEIVE_TODO} from "../actions/todo_actions";
import {REMOVE_TODO} from "../actions/todo_actions";
const initialState = {
  1: {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  2: {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  }
};
const todosReducer = (state = initialState, action) => {
  Object.freeze(state)
  const nextState = {};
  switch (action.type) {
    case RECEIVE_TODOS:
      action.todos.forEach(todo => {
        nextState[todo.id]=todo;
      });
       return nextState;
    case RECEIVE_TODO:
      const newTodo={[action.todo.id]: action.todo}
      return Object.assign({},state,newTodo);
    case REMOVE_TODO:
      const newState=Object.assign({},state);
      delete newState[action.todo.id];
      return newState;
    default:
      return state;
  }
};

export default todosReducer;