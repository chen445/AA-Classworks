import React from "react";

const todoList = (props) => {
return (
    <>
    <h3>Todo List goes here!</h3>
    <ul>
        {props.todos.map((todo, i) => (
        <li key={i}>Todo: {todo.title} Body: {todo.body} ID: {todo.id}</li>
        ))}
    </ul>
    </> 
)};

export default todoList;