import styled from 'styled-components';

export const Container = styled.div`
display: flex;
`

export const TimeLine = styled.div`
margin-top: 14px;
`

export const TimeDay = styled.div`
margin: 38px 8px 38px 18px;
font-size: 22px;
color: silver;
`

export const EventsGrid = styled.div`
display: grid;
grid-template-columns: repeat(7, 1fr);
width: 100%;
// margin-top: -22px;
// z-index: -1;
`
export const EventsDay = styled.div`
border-left: 1px solid gainsboro;
border-right: 1px solid gainsboro;

&:last-child {
    border-right: none;
}

&:first-child {
    border-left: none;
}
`
export const EventItem = styled.div`
height: 62px;
border-top: 2px solid gainsboro;
border-bootom: 2px solid gainsboro;
box-shadow: ${props => props.isEvent &&= '0 0 0 2px white inset'};
background-color: ${props => props.isEvent &&= 'lavender'};
cursor: pointer;

&:last-child {
    border-bottom: none;
}

&:first-child {
    border-top: none;
}
`