"use client";
import React, { useState } from 'react';
import '../globals.css';

const ChatBox = () => {
  const [showChat, setShowChat] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState([]);

  const toggleChat = () => {
    setShowChat(!showChat);
  };

  const closeChat = () => {
    setShowChat(false);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    if (inputValue.trim() !== '') {
      setMessages([...messages, { text: inputValue }]);
      callApi(inputValue); // Call the API with user input
      setInputValue('');
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  };

  function callApi(textInput) {
    // Same callApi function logic as provided in the previous code
    // You can modify this function to fit your specific API endpoint and response handling
    fetch("https://api.cohere.ai/v1/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "BEARER FUFAxlCrLUL7ZOYSh5RAOFhadrYR99bQbWpaxXsA",
      },
      body: JSON.stringify({
        model: "command",
        prompt: `in a very concise single sentence, answer "${textInput}" as a medical doctor would in exclusively medical terms and provide medicine that can help`,
        max_tokens: 300,
        temperature: 0.9,
        k: 0,
        stop_sequences: [],
        return_likelihoods: "NONE",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("API Response:", data);
        if (data.generations && data.generations.length > 0) {
          setMessages([...messages, { text: data.generations[0].text }]);
        } else {
          setMessages([...messages, { text: "Error: No response from API." }]);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setMessages([...messages, { text: "Error: Failed to fetch response from API." }]);
      });
  }


  return (
    <div>
      <div className="fixed bottom-4 right-10">      
        <div className="group relative">
          <button onClick={toggleChat}>
            <svg
              strokeLinejoin="round"
              strokeLinecap="round"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              height="44"
              width="44"
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 hover:scale-125 duration-200 hover:stroke-blue-500"
              fill="none"
            >
              <path fill="none" d="M0 0h24v24H0z" stroke="none"></path>
              <path d="M8 9h8"></path>
              <path d="M8 13h6"></path>
              <path
                d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z"
              ></path>
            </svg>
          </button>
          <span className="absolute -top-14 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 px-3 rounded-lg border border-gray-300 bg-white py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
            <span> Chat</span>
          </span>
        </div>
      </div>


      <div className={`${showChat ? 'container fixed bottom-4 right-10' : 'hidden'}`}>
        <div className="nav-bar">
          <a>Chat</a>
          <div className="close" onClick={closeChat}>
            <div className="line one"></div>
            <div className="line two"></div>
          </div>
        </div>
        <div className="messages-area">
          {messages.map((message, index) => (
            <div className="message" key={index}>
              <div className="messageT incomingT">
                <p>{message.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="sender-area">
          <div className="input-place">
            <input
              placeholder="Send a message."
              className="send-input"
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
            />
            <div className="send" onClick={handleSubmit}>
              <svg
                className="send-icon"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 512 512"
                style={{ enableBackground: 'new 0 0 512 512' }}
                xmlSpace="preserve"
              >
                <g>
                  <g>
                    <path
                      fill="#6B6C7B"
                      d="M481.508,210.336L68.414,38.926c-17.403-7.222-37.064-4.045-51.309,8.287C2.86,59.547-3.098,78.551,1.558,96.808 L38.327,241h180.026c8.284,0,15.001,6.716,15.001,15.001c0,8.284-6.716,15.001-15.001,15.001H38.327L1.558,415.193 c-4.656,18.258,1.301,37.262,15.547,49.595c14.274,12.357,33.937,15.495,51.31,8.287l413.094-171.409 C500.317,293.862,512,276.364,512,256.001C512,235.638,500.317,218.139,481.508,210.336z"
                    ></path>
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



export default ChatBox;
