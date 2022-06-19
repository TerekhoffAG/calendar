import React, { useState } from 'react';
import Header from './components/Header';
import Headline from './components/Headline';
import Schedule from './components/Schedule';
import Footer from './components/Footer';
import styled from 'styled-components';
import PopupEvent from './components/PopupEvent';

const AppWrapper = styled.div`
max-width: 740px;
min-width: 432px;
margin: 0 auto;
`

const App = () => {
    const [isShowPopupEvent, setShowPopupEvent] = useState(false);
    const [isShowDeleteBtn, setShowDeleteBtn] = useState(false);

    return (
        <AppWrapper>
            <Header onClickBtn={setShowPopupEvent}/>
            <Headline/>
            <Schedule onClickEvent={setShowDeleteBtn}/>
            <Footer isShowDeleteBtn={isShowDeleteBtn}/>
            <PopupEvent isShow={isShowPopupEvent} onClickBtn={setShowPopupEvent}/>
        </AppWrapper>
    );
}

export default App;
