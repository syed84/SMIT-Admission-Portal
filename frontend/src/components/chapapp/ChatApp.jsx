import React, { useState, useEffect } from 'react';

const ChatApp = () => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        // Fetch existing messages from the server when the component mounts
        fetch('http://localhost:9000/messages')
            .then(response => response.json())
            .then(data => setMessages(data))
            .catch(error => console.error('Error fetching messages:', error));
    }, []);

    const sendMessage = () => {
        if (message.trim()) {
            fetch('http://localhost:9000/messages', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ text: message })
            })
                .then(response => response.json())
                .then(newMessage => {
                    setMessages((prevMessages) => [...prevMessages, newMessage]);
                    setMessage('');
                })
                .catch(error => console.error('Error sending message:', error));
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    };

    return (
        <div>
            <h1>Chatting</h1>
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Enter Message"
            />
            <button onClick={sendMessage}>Send</button>
            <div>
                {messages.map((msg, index) => (
                    <p key={index}>{msg.text}</p>
                ))}
            </div>
        </div>
    );
};

export default ChatApp;
