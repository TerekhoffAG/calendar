import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const render = (Component) => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    return root.render(
        <Component />
    );
};

render(App);
