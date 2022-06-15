import React from 'react';
import {Button, Container, Title} from './style';

const Header = ({onClickBtn}) => {
    return (
        <Container>
            <Title>Interview Calendar</Title>
            <Button onClick={() => onClickBtn(true)}/>
        </Container>
    )
}

export default Header;