import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
}
`

const render = (Component, GlobalStyle) => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    return root.render(
        <>
            <GlobalStyle />
            <Component />
        </>
    );
};

render(App, GlobalStyle);
