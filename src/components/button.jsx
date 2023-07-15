import React from 'react'
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { pink } from '../const/colors';
import { BTN_TEXT } from '../const/const';
import { motion } from "framer-motion";


const MyBtn =  styled(motion.button)`
    background-color: ${pink};
    width: 246px;
    height: 56px;
    border-radius: 50px;
    border: none;
    font-family: 'Arvo';
    font-weight: 400;
    font-size: 20px;
    color:white;
`

const Button = () => {
    const navigate = useNavigate()
    return ( 
        <MyBtn whileHover={{ scale: 1.2 }}   onClick={()=>navigate('contact-us')}>
            {BTN_TEXT}
        </MyBtn>
     );
}
 
export default Button;