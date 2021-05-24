import React from 'react';
import {uniqueId} from '../../util/id'

class TodoListForm extends React.Component{

    constructor(props){
        super(props);

        this.state={
            title:"",
            body:"",
            done:false,
            id: uniqueId(),
        }

        this.updateTitle = this.updateTitle.bind(this);
        this.updateBody = this.updateBody.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this);
    }

    updateTitle(e) {
        this.setState({title:e.target.value})
    }

    updateBody(e) {
        this.setState({body:e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        const todo = Object.assign({}, this.state);
        this.props.receiveTodo(todo);
        this.setState({
            title: "",
            body: "",
            done: false,
            id: uniqueId()
        })
    }
    
   render() {
        return (
            <form onSubmit={ this.handleSubmit} >
                <h4>Add a Todo</h4>
                <label>
                    Title:
                     <input type="text" value={this.state.title} onChange={this.updateTitle}/>
                </label>
                <label>
                    Body:
                     <input type="text" value={this.state.body} onChange={ this.updateBody}/>
                </label>
                <input type="submit" value="Add Todo!" />
            </form>
        )
    }

}

export default TodoListForm;