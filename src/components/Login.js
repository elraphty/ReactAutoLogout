import React, { Component } from 'react';

class Login extends Component {
 
  login() {
    const { history } = this.props;
    history.push('/home');
  }
    
  render() {
    return (
      <div>
        <h1>Login</h1>
        <button style={{backgroundColor: 'green', padding: '15px', outline: 'none', border: 'none', borderRadius: '5px', color: 'white', fontSize: '15px', fontWeight: 'bold'}} type="button" onClick={this.login.bind(this)}>Click to login</button>
      </div>
    );
  }
}

export default Login;