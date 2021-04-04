import React from 'react'
import styled from 'styled-components'

import Button from '../button'

import {HeaderLogo} from '../texts'

const Header = () => {
    return(
        <Container>
            <ContainerLeft>
                <HeaderLogo>Personal</HeaderLogo>
            </ContainerLeft>
            <ContainerRight>
                <MenuContainer>
            <Button isSelected={true} label="Home"></Button>
            <Button label="About Us"></Button>
            <Button label="Services"></Button>
            </MenuContainer>
            <ContactUsContainer>
            <Button secondary={true} label="Contact us"></Button>
            </ContactUsContainer>
            </ContainerRight>
        </Container>
 )
}


const ContactUsContainer = styled.div`
    display:flex;
    flex:1;
    justify-content: flex-end;
`

const MenuContainer = styled.div`
    display:flex;
    flex:2;
    justify-content: space-between;
`

const ContainerRight= styled.div`
    display:flex;
    flex:2;
    justify-content: space-between;
`
const ContainerLeft= styled.div`
    display:flex;
    flex:1;
    align-items:center;
    padding:12px;
`



const Container =styled.div`
    display:flex;
    flex-direction: row;
    padding:12px;
`

export default Header