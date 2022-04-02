import React from 'react'
import styled, {createGlobalStyle} from "styled-components"

const StyledUnderTopText = styled.div`

margin: ${props => props.margin || "27px 0 0 26.73%"};
width: 13.47%;
text-align: "start";
font-size: 24px;
color: rgba(56, 71, 88, 1);
font-weight: 500;
font-family: 'Poppins';
font-style: normal;
line-height: 28px;
// height: ${props => props.height || "48px"};
`
function UnderTopText({children, ...props}) {
    return (
        <StyledUnderTopText {...props}>
            {children}
        </StyledUnderTopText>
    )
}

export default UnderTopText