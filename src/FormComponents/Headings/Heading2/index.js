import styled from 'styled-components';
import {Theme} from '../../../Store/ThemeProvider';
import React,{useContext} from 'react'


const StyledHeading=styled.h2`
    color:${props=>props.theme.colorSecondary}
`;
const Heading2 = function(props){
    const {state,dispatch} = useContext(Theme);
    return <StyledHeading theme={state}>{props.children}</StyledHeading>
    
}
export default Heading2;