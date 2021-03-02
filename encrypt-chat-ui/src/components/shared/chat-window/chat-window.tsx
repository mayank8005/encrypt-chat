import React from "react";
import { io } from "socket.io-client";

import './chat-window.css';
import { ENDPOINT } from './chat-window.constant'
import { Socket } from "dgram";

type Props = {
    secretKey: string
}


const ChatWindow = (props: Props) => {

    const [message, setMessage] = React.useState('');
    const [history, setHistory] = React.useState([]);
    const [socketConnection, setSocket] = React.useState();

    React.useEffect(() => {
        // added transport websocket to avoid cors issue
        const socket = io(ENDPOINT, { transports: ['websocket'] });
        // @ts-ignore
        setSocket(socket);
        console.log(props);
        socket.emit('getHistory', { key: props.secretKey });

        socket.on('newMessageReceived', (data: string) => {
            console.log('history', history);
            // @ts-ignore
            socket.emit('getHistory', { key: props.secretKey });
        })

        socket.on('history', (data: string[]): void => {
            // @ts-ignore
            setHistory(data);
        })
    }, []);

    React.useEffect(() => {
        console.log(props, 'opri')
    }, [props])

    let onSendClicked = () => {
        // @ts-ignore
        if (!message && Object.keys(socketConnection).length === 0) {
            return;
        }
        //send message code
        // @ts-ignore
        socketConnection.emit('newMessage', { key: props.secretKey, message: message });

        // clearing message after sending
        setMessage('');
    };

    const handleMessageChange = (event: any): void => {
        setMessage(event.target.value);
    }

    

    return (
        <div className="container">
            <textarea className="chat-box" value={history.join('\n')} disabled></textarea>
            <input className="chat-input" type="text" value={message} onChange={handleMessageChange}></input>
            <button className="send-button" onClick={onSendClicked}>Send</button>
        </div>
    )
};

export default ChatWindow;
