import './App.css';
import Greet from './components/greet';
import React, { Component } from 'react'
import Message from './components/message';

 class App extends Component {
  render() {
    return (
      <div>
         <Greet name="dimi" heroName="spider man"><p>this is children props </p> </Greet>
        <Greet name="luna" heroName="wolverine"><button>Action</button> </Greet>
        <Greet name="sahal" heroName="super man"/>
        <Message />
      </div>
    )
  }
}

export default App