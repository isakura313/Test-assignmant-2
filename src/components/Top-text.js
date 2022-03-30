import React from 'react'
import styled, {createGlobalStyle} from "styled-components"

const StyledTopText = styled.div`
display: inlin-block;

margin: ${props => props.margin || "64px auto auto auto"};
width: ${props => props.width};
text-align: ${props => props.textAlign || "center"};
font-size: 48px;
color: rgba(56, 71, 88, 1);
font-weight: 600;
font-family: 'Poppins';
font-style: normal;
line-height: 48px;
height: ${props => props.height || "48px"};
`
function TopText({children, ...props}) {
    return (
        <StyledTopText {...props}>
            {children}
        </StyledTopText>
    )
}

export default TopText