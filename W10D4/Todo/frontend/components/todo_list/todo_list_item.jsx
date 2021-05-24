import React from 'react'
import TodoDetailView from './todo_detail_view';
import TodoDetailViewContainer from "./todo_detail_container"

class TodoListItem extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            detail: false,
        }
        this.remove= this.remove.bind(this);
        this.toggleTodo=this.toggleTodo.bind(this);
        this.toggleDetail = this.toggleDetail.bind(this); 
    }
    
    toggleTodo(e){
        e.preventDefault();
        let newState= Object.assign({},this.props.todo,{done: !this.props.todo.done})
        this.props.receiveTodo(newState)
    }

    remove(e){
        e.preventDefault();
        this.props.removeTodo(this.props.todo);
    }
    toggleDetail(e){
        e.preventDefault();
        this.setState({detail: !this.state.detail});
    }
    render(){
        let detail;
        if (this.state.detail){
            detail = <TodoDetailView todo={this.props.todo}/>
        }
     return(
        <div>
        <li onClick={this.toggleDetail}>Title: {this.props.todo.title}</li>
        <div>
            {detail}
        </div>
        <button onClick={this.toggleTodo}>{this.props.todo.done ? 'Undo' : 'Done'}</button>
        <button onClick={this.remove}>Remove</button>

     </div>
    )}
}

export default TodoListItem;