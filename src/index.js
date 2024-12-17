import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import './index.css';

function RootComponent() {
    const [key, setKey] = useState(0);

    const refreshApp = () => {
        setKey(prevKey => prevKey + 1);
    };

    return <App key={key} refreshApp={refreshApp} />;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <RootComponent />
    </React.StrictMode>
);