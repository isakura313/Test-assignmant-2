import React from 'react'
import styled from "styled-components"

const StyledTopText = styled.div`
background-color: white;
margin: auto;
margin-top: ${props => props.marginTop || "0"};
width: ${props => props.width};
text-align: center;
font-size: 18px;
color: rgba(56, 71, 88, 1);
font-weight: 400;
font-family: 'Poppins';
font-style: normal;
line-height: 27px;
`
function CommonText({children, ...props}) {
    return (
        <StyledTopText {...props}>
            {children}
        </StyledTopText>
    )
}

export default CommonText