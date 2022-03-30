import React from 'react'
import styled from "styled-components"

const StyledFlex = styled.div`
display: flex;
// flex-direction: column;
flex-direction: ${props => props.direction || "column"};
align-items: ${props => props.align || "stretch"};
justify-content: ${props => props.justify || "start"}; //row
margin: ${props => props.margin || "0"};
height: ${props => props.height || "100%"};
`

const Flex = (props) => {
    return (
        <StyledFlex {...props}>

        </StyledFlex>
    )
}

export default Flex