import styled from 'styled-components';

export const ButtonContainer=styled.span`
    cursor:pointer;
    padding: 10px 30px;
    box-shadow:0px 0px 5px 0px ${props=>props.isDark?"rgba(50,50,50,0.2)":"rgba(0,0,0,0.1)"};
    box-sizing:border-box;
    border-radius:5px;
    color: ${props=>props.buttonColor? props.buttonColor : props.defaultColor};
    transition:all 0.2s;
    border-style:solid;
    border-width:0.5px;
    font-size:14px;
    margin:5px;
    :hover{
        box-shadow:0px 0px 10px 2px ${props=>props.isDark?"rgba(50,50,50,0.2)":"rgba(0,0,0,0.1)"};
    }
`;

export const ButtonContent=styled.span``;