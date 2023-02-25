import React from 'react';
import styled from 'styled-components';
import { black } from '../../const/colors';

const FooterWrapper = styled.footer`
    height: 176px;
    background-color:${black};
`

const Footer = () => {
    return ( 
        <FooterWrapper>
            <h1>footer</h1>
        </FooterWrapper>
     );
}
 
export default Footer;