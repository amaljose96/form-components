import React,{useContext} from 'react';
import {ButtonContainer,ButtonContent} from './styles';
import {Theme} from '../../../Store/ThemeProvider';
import {isDark} from '../../Utils/lightOrDark';
import getComplementBrightness from '../../Utils/getComplementBrightness';
function BasicButton(props){
    const {state} = useContext(Theme);
    const defaultColor=getComplementBrightness(state.backgroundColor);
    return <ButtonContainer {...props} theme={state} defaultColor={defaultColor} isDark={isDark(state.backgroundColor)}>
        <ButtonContent>{props.children}</ButtonContent>
    </ButtonContainer>
}

export default BasicButton;