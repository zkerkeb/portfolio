import React from 'react'
import styled from 'styled-components'

import {MenuText} from '../texts'
const index = ({label = "zorn", secondary, isSelected}) => {
    return (
        <Container secondary={secondary}>
            <MenuText secondary={secondary} isSelected={isSelected}>{label}</MenuText>
        </Container>
    )
}


const Container = styled.div`
    padding: 6px 24px;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color: ${props => props.secondary ? "#fdb649" : "transparent"};
    border-radius:24px;
`

export default index
