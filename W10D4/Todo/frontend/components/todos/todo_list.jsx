import React from "react";
import TodoListItem from '../todo_list/todo_list_item';
import TodoListForm from '../todo_list/todo_form';

const todoList = (props) => {
return (
    <>
    <h3>Todo List goes here!</h3>
    <ul>
        {props.todos.map((todo, i) => (
            <TodoListItem todo={todo} key={i} removeTodo={props.removeTodo} receiveTodo={props.receiveTodo}/>
        ))}
    </ul>
        <TodoListForm receiveTodo={props.receiveTodo}/>
    </> 
)};

export default todoList;