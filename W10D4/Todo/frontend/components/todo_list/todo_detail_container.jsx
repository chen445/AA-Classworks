import {connect} from "react-redux";
// import { receiveStep, removeSteps } from "../../actions/step_actions";
import{removeTodo} from "../../actions/todo_actions";
// import { stepsByTodoId } from "../../reducers/selectors";
import todoDetailView from "./todo_detail_view";
import {stepsByTodoId} from "../../reducers/selectors";

const mapStateToProps = (state, ownProps) => ({
    todo: stepsByTodoId(state, ownProps.todo.id)
});
  
const mapDispatchToProps = dispatch => ({
    removeTodo: todo => dispatch(removeTodo(todo))
});

export default connect(mapStateToProps, mapDispatchToProps)(todoDetailView);