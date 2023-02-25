import React from 'react'
import styled from 'styled-components';
import { pink } from '../const/colors';
import { BTN_TEXT } from '../const/const';


const MyBtn =  styled.button`
    background-color: ${pink};
    width: 246px;
    height: 56px;
    border-radius: 50px;
    border: none;
`

const Button = () => {
    return ( 
        <MyBtn>
            {BTN_TEXT}
        </MyBtn>
     );
}
 
export default Button;