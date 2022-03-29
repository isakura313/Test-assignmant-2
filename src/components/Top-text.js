import React from 'react'
import styled, {createGlobalStyle} from "styled-components"

const StyledTopText = styled.div`
height: 100px;
width: 100px;
background-color: white;
color: ${props => props.color};
`
function TopText({children, color}) {
    return (
        <StyledTopText color={color}>
            {children}
        </StyledTopText>
    )
}

export default TopText