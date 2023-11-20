import React from 'react';
import styled from 'styled-components';
import HeroSection from './Components/HeroSection';
import Services from './Components/Services';
import Trusted from './Components/Trusted';


export default function Home() {
  return (
    <>
    <Wrapper className='test'>

    <HeroSection data={"WELCOME TO"}/>
    
    <Services />
    <Trusted />
    </Wrapper>
    

    </>
  )
};

const Wrapper = styled.section`

`;
