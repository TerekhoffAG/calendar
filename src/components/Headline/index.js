import React from 'react';
import {
    BackToggle,
    Container,
    ContainerDays,
    ContainerMonths,
    DayItem,
    DayName,
    DayNumber,
    ForwardToggle, MonthName,
    Wrapper
} from './style';

const Headline = () => {
    const daysArr = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
    const OFFSET_DAY = 25;

    return(
        <Wrapper>
            <Container>
                <ContainerDays>
                    {
                        Array.from({length: daysArr.length}, (item, index) => {
                            return (
                                <DayItem key={index}>
                                    <DayName>{daysArr[index]}</DayName>
                                    <DayNumber isDayNow={index === 4}>{index + OFFSET_DAY}</DayNumber>
                                </DayItem>
                            )
                        })
                    }
                </ContainerDays>
                <ContainerMonths>
                    <BackToggle/>
                    <MonthName>March 2019</MonthName>
                    <ForwardToggle/>
                </ContainerMonths>
            </Container>
        </Wrapper>
    )
}

export default Headline;