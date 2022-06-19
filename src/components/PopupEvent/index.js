import React, { useState } from 'react';
import { CanselBtn, Container, LabelText, OkBtn, PatternInputTime, PopupContent, TimeInput, Title, WrapperBtn } from './style';

const PopupEvent = ({isShow, onClickBtn}) => {
    const [valueTime, setValueTime] = useState('');

    const handlerClickBtn = () => {
        setValueTime('');
        onClickBtn(false);
    }
 
    return (
        <Container isShow={isShow} onClick={handlerClickBtn}>
            <PopupContent onClick={event => event.stopPropagation()}>
                <Title>https://calendar.com</Title>
                <LabelText>Enter event time:</LabelText>
                <PatternInputTime>YYYY-MM-DD HH:mm:ss</PatternInputTime>
                <TimeInput value={valueTime} onChange={(e) => setValueTime(e.target.value)}/>
                <WrapperBtn>
                    <CanselBtn onClick={handlerClickBtn}>Cancel</CanselBtn>
                    <OkBtn onClick={handlerClickBtn}>OK</OkBtn>
                </WrapperBtn>
            </PopupContent>
        </Container>
    )
}

export default PopupEvent;