import React from 'react';
import { Container, DayLabel, DeleteEventBtn } from './style';

const Footer = ({isShowDeleteBtn}) => {
    return(
        <Container>
            <DayLabel>Today</DayLabel>
            <DeleteEventBtn isShow={isShowDeleteBtn}>Delete</DeleteEventBtn>
        </Container>
    )
}

export default Footer;