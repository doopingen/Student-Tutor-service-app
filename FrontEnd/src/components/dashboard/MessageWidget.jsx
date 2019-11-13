import React from 'react';
import { Router } from 'react-router-dom';

class MessageWidget extends React.Component {
    render () {
        return (
            <>
            <h3 className="message-title">Messages</h3>
            <p className="message-row">Placeholder</p>
            <form className="message-button">
                <input type="submit" value="Message" />
            </form>
            </>
        )
    }
}

export default MessageWidget;