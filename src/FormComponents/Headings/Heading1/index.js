import styled from 'styled-components';
import {Theme} from '../../../Store/ThemeProvider';
import React,{useContext} from 'react'


const StyledHeading=styled.h1`
    color:${props=>props.theme.colorPrimary}
`;
const Heading1 = function(props){
    const {state,dispatch} = useContext(Theme);
    return <StyledHeading theme={state}>{props.children}</StyledHeading>
    
}
export default Heading1;