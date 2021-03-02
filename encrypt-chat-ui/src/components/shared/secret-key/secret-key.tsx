import React from "react";
import './secret-key.css';

type Props = {
    submitKey: (key: string) => void,
}


const SecretKey = (props: Props) => {
    
    const [key, setKey] = React.useState('');

    const handleKeyChange = (event: any): void => {
        setKey(event.target.value);
    }

    const onSubmitClick = (): void => {
        if(!key){
            return;
        }
        props.submitKey(key);
    }

    return (
        <div className="container">
            <input className="input" type="text" value={key} onChange={handleKeyChange}></input>
            <button className="button" onClick={onSubmitClick}>Set Key</button>
        </div>
)};

export default SecretKey;
