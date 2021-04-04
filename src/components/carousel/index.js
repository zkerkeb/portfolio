import React from 'react'
import styled from 'styled-components'

import {BigText, SmallText} from '../texts' 
import Button from '../button'
import zorn from '../../assets/images/zorn.jpg'

const index = () => {
    return (
        <Container>
                <LeftContainer>
                   <BigText>
                       Hi ! I'am 
                   </BigText>
                   <BigText secondary>
                       Zorno Giovanna
                   </BigText>
                   <SmallText>
                       Je suis Zorn un bed de developeur embauchez moi les mecs
                   </SmallText>
                   <ButtonContainer>
                    <Button  secondary label="Hire me"></Button>
                    </ButtonContainer>
                </LeftContainer>
                <RightContainer>
                    <Portrait src={zorn}></Portrait>
                </RightContainer>
        </Container>
    )
}

const Portrait = styled.img`
    width:250px;
`

const ButtonContainer = styled.div`
    padding:12px;
    display:flex;
    flex-direction: flex-start;
`


const RightContainer = styled.div`
    display:flex;
    flex:1;
    justify-content:center;
`
const LeftContainer = styled.div`
    display:flex;
    flex-direction:column;
    flex:1;
`

const Container = styled.div`
    padding:12px;
    display: flex;
    flex:1;
    width:100%;
`

export default index
