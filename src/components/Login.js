import React, { Component } from 'react'

import {
  TextField,
  Button,
  Container
} from '@material-ui/core'

class Login extends Component {
  state = {
    username: '',
    password: ''
  }

  
  login = (e) => {
    this.props.loginFunction(true);
  }

  render() {
    return (
      <div className="App">
        <Container maxWidth="sm">
          <form className="login-form" onSubmit={this.login}>
            <TextField
              
              
              value={this.state.username}
              name="username"
              label="Username"
              type="text" />
            <TextField
              
            
              value={this.state.password}
              name="password"
              label="Password"
              type="password" />
            <Button
              type="submit"
              className="login-button"
              variant="contained"
              color="primary">Login</Button>
          </form>
        </Container>
      </div>
    );
  }
}

export default Login;