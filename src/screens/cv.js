import React from 'react'

import styled from 'styled-components'

import Header from '../components/header'
import Carousel from '../components/carousel'
const Cv = () => {

    return(
        <>
        <CenterSite>
        <PageContainer>
        <Header/>
        <Carousel/>
        </PageContainer>
        </CenterSite>
        </>
    )
}
const CenterSite = styled.div`
    justify-content:center;
    display:flex;
`

const PageContainer = styled.div`
    display:flex;
    justify-content:center;
    flex-direction: column;
    width: 800px;
`

export default Cv