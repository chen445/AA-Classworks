import {connect} from "react-redux";
// import { receiveStep, removeSteps } from "../../actions/step_actions";
import{removeTodo} from "../../actions/todo_actions";
import todoDetailView from "./todo_detail_view";

// const mapStateToProps = state => ({
//     todos: allTodos(state.todos)
// });
  
const mapDispatchToProps = dispatch => ({
    removeTodo: todo=>dispatch(removeTodo(todo))
});

export default connect(null, mapDispatchToProps)(todoDetailView);