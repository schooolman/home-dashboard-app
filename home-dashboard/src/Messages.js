import React from 'react';

class MessageDisplay extends React.Component {

    render() {
        const messageHeader = 'Messages from others';
    
        return(
            <h4>{messageHeader}</h4>
        );
    }
}

export default MessageDisplay;