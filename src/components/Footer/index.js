import React from 'react';
import { Container, DayLabel, DeleteEventBtn } from './style';

const Footer = () => {
    return(
        <Container>
            <DayLabel>Today</DayLabel>
            <DeleteEventBtn>Delete</DeleteEventBtn>
        </Container>
    )
}

export default Footer;