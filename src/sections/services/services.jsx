import React from 'react';
import styled from 'styled-components';
import { brown } from '../../const/colors';


const Section= styled.section`
    height: 100vh;
    background-color: ${brown};
`


const Services = () => {
    return ( 
        <Section>
            <h1>services</h1>
        </Section>
     );
}
 
export default Services;