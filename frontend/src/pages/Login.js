import React, { Component } from 'react';
import './Login.css';
import twitterLogo from '../twitter.svg';

export default class Login extends Component {
  state = {
    username: ''
  };

  handleInputChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { username } = this.state;

    if (!username) return;

    localStorage.setItem('@GoTwitter:username', username);

    this.props.history.push('/timeline');
  };
  
  render() {
    const { username } = this.state;
    return (
      <div className="login-wrapper">
        <img src={twitterLogo} alt="GoTwitter" />
        <form onSubmit={this.handleSubmit}>
          <input
            value={username}
            name="username"
            onChange={this.handleInputChange}
            placeholder="Nome de usuário"
          />
          <button type="submit">Entrar</button>
        </form>
      </div>
    );
  }
}
