import React from 'react'
import styled from "styled-components"

const StyledTopText = styled.div`

margin: ${props => props.margin || "47px auto auto auto"};
width: ${props => props.width};
text-align: ${props => props.textAlign || "center"};
font-size: ${props => props.fontSize || "18px"};
color: rgba(96, 111, 129, 1);
font-weight: 400;
font-family: 'Poppins';
font-style: normal;
line-height: ${props => props.lineHeight || "27px"};
`
function CommonText({children, ...props}) {
    return (
        <StyledTopText {...props}>
            {children}
        </StyledTopText>
    )
}

export default CommonText