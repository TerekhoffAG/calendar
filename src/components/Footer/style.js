import styled from 'styled-components';

export const Container = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 26px 50px 26px 50px;
border-top: 2px solid gainsboro;
background-color: whitesmoke;
`

export const DayLabel = styled.div`
font-size: 28px;
color: red;
`
export const DeleteEventBtn = styled.div`
display: ${({isShow}) => isShow ? 'block' : 'none'};
border: none;
background: none;
cursor: pointer;
font-size: 28px;
color: red;
`