import React from 'react'
import styled from 'styled-components';

const MyInput = styled.input`
    border-radius: 5px;
    border-width: 1px;
    height: 40px;
    width: 70%;
`

const Input = ({type,placeholder, name}) => {
    return ( 
       
        <MyInput type={type} name={name} placeholder={placeholder} />
     );
}
 
export default Input;