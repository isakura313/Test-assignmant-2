import React from 'react'
import styled, {createGlobalStyle} from "styled-components"

const StyledTopText = styled.div`
width: 100px;
background-color: white;
color: ${props => props.color};
margin: 64px;
text-align: center;
font-size: 48px;
`
function TopText({children, color}) {
    return (
        <StyledTopText color={color}>
            {children}
        </StyledTopText>
    )
}

export default TopText