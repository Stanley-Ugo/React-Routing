import React, { Component } from "react";

class Home extends Component {

  constructor(){
    super();

    this.state = { name: 'Steve Junior'}
    console.log('1 - constructor')
  }

  static getDerivedStateFromProps(){
    console.log('2 - getDerivedStateFromProps');
    return null;
  }

  static shouldComponentUpdate(nextProps, nextState){
    if(nextState.name === 'Steve'){
      return false
    }
    return true
  }
  render(){
    console.log('3 - render')
    return(
      <div onClick={()=> this.setState({name: 'Steve Junior'})}>Change Name</div>
    )
  }

  componentDidMount(){
    console.log('4 - componentDidMount')
  }

  componentWillUnmount(){
    console.log('X - componentWillUnmount')
  }
} 

export default Home;
