import React from 'react';
import styled from 'styled-components';
import { pink } from '../const/colors';


const Item = styled.button`
background-color: transparent;
    width: 130px;
    height: 40px;
    border-color: ${pink};
    border-radius: 10px;
    font-family: 'Arvo';
    color: gray;
`


const CategoryItem = ({item}) => {
    return ( 
        <Item>
            {item}
        </Item>
     );
}
 
export default CategoryItem;