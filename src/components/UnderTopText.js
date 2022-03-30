import React from 'react'
import styled, {createGlobalStyle} from "styled-components"

const StyledUnderTopText = styled.div`
background-color: white;
margin-top: ${props => props.marginTop || "27px"};
margin-left: 385px;
width: 194px;
text-align: ${props => props.textAlign || "center"};
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