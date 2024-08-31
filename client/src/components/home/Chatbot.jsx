import React, { useState } from 'react';
import './Chatbot.css';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: "Hi! How can I assist you today?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() === "") return;

    setMessages([...messages, { text: input, sender: "user" }]);
    setInput("");

    // Simulate a response from the chatbot
    setTimeout(() => {
      const response = generateResponse(input);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: response, sender: "bot" }
      ]);
    }, 1000);
  };

  const generateResponse = (userInput) => {
    // Basic dynamic response logic
    const lowerInput = userInput.toLowerCase();
    if (lowerInput.includes('hello')) return 'Hello! How can I help you today?';
    if (lowerInput.includes('plant care')) return 'Here are some tips for plant care...';
    return 'Sorry, I didn\'t understand that. Could you please provide more details?';
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-header">
        Chatbot
      </div>
      <div className="chatbot-messages">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`chatbot-message ${msg.sender}`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="chatbot-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
