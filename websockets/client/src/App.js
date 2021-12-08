import './App.css';
import { useState, useEffect } from 'react'
import socketIOClient from 'socket.io-client'

const socket = socketIOClient('http://localhost:5005')

function App() {

  const [message, setMessage] = useState('')

  useEffect(() => {
    // this reacts to an incoming message 
    socket.on('message', payload => {
      setMessage(payload.message)
    })
  }, [])

  const onChange = e => {
    setMessage(e.target.value)
    // this sends the content of the input field to the server
    socket.emit('new-message', {
      message: e.target.value
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <input type="text" value={message} onChange={onChange} />
      </header>
    </div>
  );
}

export default App;
