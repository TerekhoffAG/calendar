import React from 'react';
import Header from './components/Header';
import Headline from './components/Headline';
import Schedule from './components/Schedule';
import Footer from './components/Footer';
import styled from 'styled-components';

const AppWrapper = styled.div`
max-width: 740px;
margin: 0 auto;
`

const App = () => {
    return (
        <AppWrapper>
            <Header/>
            <Headline/>
            <Schedule/>
            <Footer/>
        </AppWrapper>
    );
}

export default App;
