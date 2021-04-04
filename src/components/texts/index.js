import styled from 'styled-components'


const HeaderLogo = styled.span`
    font-family: Roboto;
    font-size: 16px;
    font-weight: 600;
`

const MenuText = styled.span`
    text-align:center;  
    font-family: Roboto;
    font-size: 16px;
    font-weight: 500;
    color: ${props => props.isSelected ? '#fdb649' : props.secondary ? "white":'black' };
`

const BigText = styled.span`
    font-size: 70px;
    font-weight: 500;
    color: ${props =>  props.secondary ? "#fdb649":'black' };

`

const SmallText = styled.span`
    font-size:20px;
    font-weight: 400;
    color: ${props =>  props.secondary ? "#fdb649":'black' };

`


export {HeaderLogo, MenuText, BigText, SmallText}