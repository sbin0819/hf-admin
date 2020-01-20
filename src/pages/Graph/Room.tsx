import React, { useState, useEffect } from 'react';

const Room = ({ match }) => {
  const [message, setMessage] = useState('');

  const [messages, setMessages] = useState<any[]>([]);

  useEffect(() => {}, [messages]);

  const sendMessage = (event) => {
    event.preventDefault();
    messages.push(message);
    setMessages([...messages]);
    setMessage('');
  };
  return (
    <div>
      <div
        style={{
          width: '500px',
          height: '400px',
          backgroundColor: 'lightBlue',
          color: 'black',
        }}
      >
        {messages.map((message, i) => (
          <li key={i}>{message}</li>
        ))}
      </div>
      <input
        className="input"
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={({ target: { value } }) => setMessage(value)}
        onKeyPress={(event) =>
          event.key === 'Enter' ? sendMessage(event) : null
        }
      />
    </div>
  );
};

export default Room;