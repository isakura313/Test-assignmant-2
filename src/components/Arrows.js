import React from 'react'
import styled from "styled-components"

const StyledArrows = styled.div`
width: 115px;
height: 48px;
background-color: white;
// margin-top: 31px;
margin: auto;
margin-top: ${props => props.marginTop || "0"};
`
function Arrows({children, ...props}) {
    return (
        <StyledArrows {...props}>
            <img src="./right-arrow.svg" alt="right arrow"/>
        </StyledArrows>
    )
}

export default Arrows