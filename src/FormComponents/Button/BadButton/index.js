import React from 'react';
import BasicButton from '../BasicButton';

function BadButton(props){
    return <BasicButton buttonColor={"#f00"} {...props}/>
}

export default BadButton;