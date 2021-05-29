import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({},this.state);

    this.props.processForm({user});
  }

  render() {
    return (
      <div className="session-form">
        {this.props.errors.session.map(err => <p>err</p>)}
        <div>{
            this.props.formType == 'singup' ? (
              <Link className="btn" to="/login">Log In</Link>
            ) : (
              <Link className="btn" to="/signup">Sign Up</Link>
            )
        }</div>
        <h2>{
            this.props.formType == 'singup' ? 'Sign Up' : 'Log in'
        }</h2>
        <form>
          <label>Username:
            <input type="text" value={this.state.username}
              onChange={this.handleInput('username')} 
            />
          </label>
          <label>Password:
            <input type="password" value={this.state.password}
              onChange={this.handleInput('password')} 
            />
          </label>
          <button onClick={this.handleSubmit}>{
            this.props.formType == 'singup' ? 'Sign Up' : 'Log in'
          }</button>
        </form>
      </div>
    );
  }
}


export default SessionForm