import React, { Component } from 'react'

export class Search extends Component {

  render () {
    return (
<form className='input-group mt-5 mb-3'>
        <input
          type='text'
          value={this.props.value}
          onChange={this.props.handleChange}
          className='form-control'
          placeholder='Search...'
        />
      </form>
    )
  }
}

export default Search