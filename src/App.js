import React from 'react';
import Header from './components/Header';
import Headline from './components/Headline';
import Schedule from './components/Schedule';
import Footer from './components/Footer';
import styled from 'styled-components';
import PopupEvent from './components/PopupEvent';
import { useState } from 'react';

const AppWrapper = styled.div`
max-width: 740px;
min-width: 432px;
margin: 0 auto;
`

const App = () => {
    const [isShowPopupEvent, setShowPopupEvent] = useState(false)

    return (
        <AppWrapper>
            <Header onClickBtn={setShowPopupEvent}/>
            <Headline/>
            <Schedule/>
            <Footer/>
            <PopupEvent isShow={isShowPopupEvent} onClickBtn={setShowPopupEvent}/>
        </AppWrapper>
    );
}

export default App;
