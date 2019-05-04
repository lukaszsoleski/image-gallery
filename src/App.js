import React, { Component } from 'react'
import { Search } from './Components/Search'
import ImageSection from "./Components/ImageSection"
import Login from './Components/Login'
import Menu from './Components/Menu'

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
  toggleLoginState = () => {
    this.setState(currState => ({isLoggedIn:!currState.isLoggedIn}))
  }
  // no manual binding required


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

//  {this.state.isLoggedIn ? 
// this.gallery() 
// : 
//   <Login login={this.state.login} onConfirm={this.toggleLoginState} handleChange={this.handleLoginInput}/>
// }

  render () {
   return (
    <>
      <Menu username={this.state.login} isLoggedIn={this.state.isLoggedIn} onLoginStateClick={this.toggleLoginState} />
    </>
    )
  }
}
