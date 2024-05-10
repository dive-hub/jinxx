import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { BsChatHeartFill, BsChatLeftHeartFill, BsPersonFill } from 'react-icons/bs';

function Chat() {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };

    const handleSendMessage = () => {
        if (message.trim() !== '') {
            setMessages([...messages, message]);
            setMessage('');
        }
    };

    return (
        <>
            <Card className='card'>
                <Card.Header className='card-header'>
                    <Nav.Link className='nav-items'>
                        <BsChatLeftHeartFill />Public
                    </Nav.Link>
                    <Nav.Link className='nav-items'>
                        <BsChatHeartFill />Private
                    </Nav.Link>
                    <Nav.Link>
                        <BsPersonFill />
                    </Nav.Link>
                </Card.Header>
                <Card.Body>
                    {messages.map((msg, index) => (
                        <div key={index} className="message">
                            {msg}
                        </div>
                    ))}
                </Card.Body>
                <Card.Footer className="text-muted">
                    <input
                        className="chat-box "
                        placeholder="Type your message..."
                        value={message}
                        onChange={handleMessageChange}
                    />
                    <Button className="chat-button" onClick={handleSendMessage}>Send</Button>
                </Card.Footer>
            </Card>
        </>
    );
}

export default Chat;
