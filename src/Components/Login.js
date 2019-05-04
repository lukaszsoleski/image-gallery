import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
export default class Login extends Component {
  render() {
    return (
      <div className='container'>
        <div className='col justify-content-center'>
        <form noValidate autoComplete="off">
        <TextField
          id="standard-name"
          label="Name"
          className='mb-2'
          value={this.state.login}
          onChange={this.state.handleChange}
          margin="normal"
        />

        <TextField
          id="standard-password-input"
          label="Password"
          className='mb-2'
          type="password"
          autoComplete="current-password"
          margin="normal"
        />
        </form>
        <Button variant="outlined" onClick={this.state.onConfirm}>Login</Button>
        </div>
      </div>
    )
  }
}
