import React from 'react'
import styled from "styled-components"
import arrow1 from "./right-arrow.svg"
import arrow2 from "./left-arrow.svg"


const StyledArrows = styled.div`
width: 115px;
height: 48px;
background-color: white;
// margin-top: 31px;
margin: auto;
margin-top: ${props => props.marginTop || "0"};
display: flex;
justify-content: space-between;
`
function Arrows({children, ...props}) {
    return (
        <StyledArrows {...props}>
            <img width = {"48px"} height="48px" src={arrow1} alt="arrow" />
            <img width = {"48px"} height="48px" src={arrow2} alt="arrow" />
        </StyledArrows>
    )
}

export default Arrows