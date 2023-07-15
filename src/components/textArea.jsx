import React from 'react'
import styled from 'styled-components';

const MyArea=styled.textarea`
    border-radius: 5px;
  border-width: 1px;
  height: 80px;
  width: 70%; 
`


const TextArea = ({name}) => {
    return ( 
        <MyArea name={name} placeholder='Tell me something about your project'>

        </MyArea>
     );
}
 
export default TextArea;