import React,{useContext} from 'react';
import styled from 'styled-components';
import {Theme} from '../../Store/ThemeProvider';
import {isDark} from '../Utils/lightOrDark';
import getComplementBrightness from '../Utils/getComplementBrightness';
const FontInjector=styled.div`
    font-family:${props=>props.theme.fontFamily};
    background-color:${props=>props.theme.backgroundColor};
    color:${props=>props.theme.textColor};
    position:fixed;
    height:100%;
    width:100%;
    font-size:12px;
`;

function AppStyles(props){
    const {state} = useContext(Theme);
    state.textColor=getComplementBrightness(state.backgroundColor);
    return <FontInjector theme={state}>
        {props.children}
    </FontInjector>
}

function fontInjector(MainComponent){
    return (props)=>{
        return  <AppStyles>
                    <MainComponent {...props}/>
                </AppStyles>
    }
}

export default fontInjector;

