import React, { Component } from 'react'
import { Search } from './Components/Search'
import ImageSection from "./Components/ImageSection"
export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      text: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    
  }
  handleInputChange (event) {
    this.setState({ text: event.target.value })
  }
  render () {
    return (
      <div className='container'>
        <div className='row'>
          <Search
            value={this.state.text}
            handleChange={this.handleInputChange}
          />
        </div>
        <div className='row justify-content-around'>
          <ImageSection name={this.state.text} />
        </div>
      </div>
    )
  }
}
