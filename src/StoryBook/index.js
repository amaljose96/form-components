import React from 'react';
import Heading1 from '../FormComponents/Headings/Heading1';
import Heading2 from '../FormComponents/Headings/Heading2';
import Paragraph from '../FormComponents/Paragraph';
import {StoryBookBody} from './styles';
import BasicButton from '../FormComponents/Button/BasicButton';
import BadButton from '../FormComponents/Button/BadButton';
import GoodButton from '../FormComponents/Button/GoodButton';
function StoryBook(props){
    return <StoryBookBody>
        <Heading1>Welcome to Form Components</Heading1>
        <Paragraph>Here you can browse various Form Components and use them in your application.</Paragraph>
        <Heading2>1. Button</Heading2>
        <BasicButton onClick={()=>{alert("Its ok")}}>
            Hello
        </BasicButton>
        <Heading2>2. No No Button</Heading2>
        <BadButton onClick={()=>{alert("Its not OK")}}>
            Hello
        </BadButton>
        <Heading2>3. Good Button</Heading2>
        <GoodButton onClick={()=>{alert("Its not OK")}}>
            Hello
        </GoodButton>
    </StoryBookBody>;
}

export default StoryBook;