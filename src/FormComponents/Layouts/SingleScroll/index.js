import React from 'react';
import {SingleScrollContainer,SingleScrollBody} from './styles';
function SingleScrollLayout(props){
    return <SingleScrollContainer>
        <SingleScrollBody>
            {props.children}
        </SingleScrollBody>
    </SingleScrollContainer>
}

export default SingleScrollLayout