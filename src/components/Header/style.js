import styled from 'styled-components';

export const Container = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin: 45px 50px 45px 50px;
`;

export const Title = styled.div`
    font-size: 32px;
`;

export const Button = styled.button`
position: relative;
display: block;
width : 26px;
height: 26px;
border: none;
background: none;
cursor: pointer;
        
&:focus {
    outline: none
}
&::before {
    content: "";
    position: absolute;
    display: block;
    width: 26px;
    height: 26px;
    top: 0;
    left: 11px;
    border-left: 3px solid red;
}

&::after {
    content: "";
    position: absolute;
    display: block;
    width: 26px;
    height: 26px;
    top: 11px;
    left: 0;
    border-top: 3px solid red;
}
`;
