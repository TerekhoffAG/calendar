import styled from 'styled-components';

export const Container = styled.div`
position: fixed;
width: 100%;
height: 100%;
top: 0;
left:0;
background-color: rgba(0, 0, 0, .3);
display: ${({isShow}) => isShow ? 'fixed' : 'none'};;
align-items: center;
justify-content: center;
`
export const PopupContent = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 76%;
min-width: 365px;
max-width: 538px;
background-color: whitesmoke;
border-radius: 22px;
`

export const Title = styled.h2`
margin-top: 36px;
font-size: 34px;
`

export const LabelText = styled.span`
margin-top: 12px;
font-size: 26px;
`

export const PatternInputTime = styled(LabelText)`
margin: 8px 0;
`

export const TimeInput = styled.input`
width: 82%;
margin: 32px 29px 24px 29px;
padding: 6px 8px 6px;
font-family: inherit;
line-height: 30px;
font-size: 30px;
border: 1px solid gray;
border-radius: 0;
caret-color: blue;
&:focus {
    outline: none;
}
`

export const WrapperBtn = styled.div`
diplay: flex;
border-top: 1px solid gray;
width: 100%;
`

export const CanselBtn = styled.button`
width: 50%;
font-size: 36px;
color: blue;
background: none;
border: none;
padding: 22px;
border-bottom-left-radius: 22px;
cursor: pointer;
`

export const OkBtn = styled(CanselBtn)`
border-left: 1px solid gray;
border-bottom-left-radius: 0;
border-bottom-right-radius: 22px;
`