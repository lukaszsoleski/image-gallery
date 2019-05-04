import React, { Component } from 'react'
import { Search } from './Components/Search'
import ImageSection from "./Components/ImageSection"
import Login from './Components/Login';


export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      text: "",
      isLoggedIn: false,
      login:""
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    
  }
  handleInputChange (event) {
    this.setState({ text: event.target.value })
  }
  handleLoginInput = (event) => {
    this.setState({login: event.target.value})
  }
  // experimental syntax
  login = () => {
    console.log("User logged in")
    this.setState({isLoggedIn:true})
  }
  // no manual binding required
  logout = () => {
    
    this.setState({isLoggedIn:false})
  }

  gallery(){
   return( <div className='container'>
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
  )}

  render () {
   return <Login login={this.state.login} onConfirm={this.login} handleChange={this.handleLoginInput}></Login>
  }
}
