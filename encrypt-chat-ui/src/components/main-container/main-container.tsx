import React, { useState }  from 'react';
import './main-container.css';

import Header from "../shared/header/header";
import SecretKey from '../shared/secret-key/secret-key';
import ChatWindow from '../shared/chat-window/chat-window';


const MainContainer = () => {
    const [key, setKey] = useState('');

    return (
        <div className="main-container">
            <Header/>
            <SecretKey submitKey={setKey}/>
           {key ? <ChatWindow secretKey={key}/> : null }
            
        </div>
    )}

export default MainContainer;