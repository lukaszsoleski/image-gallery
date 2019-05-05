import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
export default class Login extends Component {

  render() {

    return (
      <div className='container'>
        <div className='col justify-content-center'>

          <form noValidate autoComplete="off" className='form-group'>
            <TextField
              id="standard-name"
              label="Username"
              className='mb-2 form-control'
              value={this.props.login}
              onChange={this.props.handleChange}
              margin="normal"
            />

            <TextField
              id="standard-password-input"
              label="Password"
              className='mb-2 form-control'
              type="password"
              autoComplete="current-password"
              margin="normal"
            />
          </form>
          <Button variant="outlined" className='mt-2' onClick={this.props.onConfirm}>Login</Button>
        </div>
      </div>
    )
  }
}
