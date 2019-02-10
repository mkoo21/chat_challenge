import React, { Component } from 'react';
import Message from './Message'

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: [],
    }
    this.onAddClicked = this.onAddClicked.bind(this)
    this.addMessageToState = this.addMessageToState.bind(this)
    this.inputRef = React.createRef()
  }

  componentDidMount(){
    const connection = new WebSocket('ws://localhost:1337');
    connection.onmessage = (msg) => {
      this.addMessageToState(JSON.parse(msg.data))
      // console.log(msg.data);
    }

  }

  addMessageToState(message) {
    this.setState(state => ({
      messages: state.messages.concat(message)
    }))
  }

  onAddClicked() {
    // console.log(this.inputRef.current)
    const msg = this.inputRef.current.value
    this.addMessageToState({
      user: 'John',
      msg,
    })
    // send to the backend
  }

  render() {
    const { messages } = this.state
    return (
      <div className="App">
        <input type="text" ref={this.inputRef} />
        <button onClick={this.onAddClicked}>Submit</button>
        {messages.map(message => (
          <Message user={message.user} msg={message.msg} />
        ))}

      </div>
    );
  }
}

export default App;
