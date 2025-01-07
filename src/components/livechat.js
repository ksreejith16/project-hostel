import React, { useState } from 'react';
import './live.css';

function CustomChat() {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hello! How can I help you today?', timestamp: '10:00 AM' },
    { id: 2, text: 'Can you tell me more about the hostel facilities?', timestamp: '10:01 AM' },
  ]);
  const [input, setInput] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    const newMessage = {
      id: messages.length + 1,
      text: input,
      timestamp: new Date().toLocaleTimeString(),
    };
    setMessages([...messages, newMessage]);
    setInput('');
  };

  return (
    <div className="custom-chat-container">
      <h2 className="custom-chat-heading">Live Chat</h2>
      <div className="custom-chat-messages">
        {messages.map((message) => (
          <div key={message.id} className="custom-chat-message">
            <p>{message.text}</p>
            <span>{message.timestamp}</span>
          </div>
        ))}
      </div>
      <form onSubmit={handleSendMessage} className="custom-chat-form">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          required
          className="custom-chat-input"
        />
        <button type="submit" className="custom-chat-button">Send</button>
      </form>
    </div>
  );
}

export default CustomChat;
