import React from 'react'
class todoDetailView extends React.Component{
    constructor(props){
        super(props);
        // this.remove= this.remove.bind(this);
        // this.toggleTodo=this.toggleTodo.bind(this);
    }
    
    // toggleTodo(e){
    //     e.preventDefault();
    //     let newState= Object.assign({},this.props.todo,{done: !this.props.todo.done})
    //     this.props.receiveTodo(newState)
    // }

    // remove(e){
    //     e.preventDefault();
    //     this.props.removeTodo(this.props.todo);
    // }
    render(){
     return(
        <div>
        <li>Body: {this.props.todo.body} ID: {this.props.todo.id}</li>
        {/* <button onClick={this.toggleTodo}>{this.props.todo.done ? 'Undo' : 'Done'}</button>
        // <button onClick={this.remove}>Remove</button> */}
     </div>
    )}
}

export default todoDetailView;