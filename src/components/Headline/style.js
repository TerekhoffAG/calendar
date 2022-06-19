import styled from 'styled-components';

export const Wrapper = styled.div`
width: 100%;
border-top: 2px solid gainsboro;
border-bottom: 2px solid gainsboro;
background-color: whitesmoke;
`

export const Container = styled.div`
display: flex;
flex-direction: column;
margin-left: 96px;
margin-right: 20px;
`

export const ContainerDays = styled.div`
display: flex;
justify-content: space-between;
`

export const DayItem = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
height: 106px;
`

export const DayName = styled.span`
font-size: 15px;
`

export const DayNumber = styled.span`
font-size: 26px;
line-height: 46px;
width: 48px;
height: 48px;
text-align: center;
border-radius: 100%;
color: ${props => props.isDayNow &&= 'white'};
background-color: ${({isDayNow}) => isDayNow &&= 'red'};
`

export const ContainerMonths = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin: 0 20px 15px 20px;
`

export const MonthName = styled.span`
font-size: 26px;
`

export const BackToggle = styled.div`
width: 12px;
height: 12px;
border-left: 3px solid red;
border-top: 3px solid red;
transform: rotate(-45deg);
cursor:pointer;
`

export const ForwardToggle = styled.div`
width: 12px;
height: 12px;
border-right: 3px solid red;
border-top: 3px solid red;
transform: rotate(45deg);
cursor:pointer;
`