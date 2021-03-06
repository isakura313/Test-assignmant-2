import React from 'react'
import styled from "styled-components"
import SimpleSlider from './Slider'

const StyledSliderContainer = styled.div`
z-index: 5;
width: 88%;
min-width: 500px;
height: 467px;
border: 1px solid black;
margin: 31px auto auto 4.2%;
`

function SliderContainer() {
    return(
        <StyledSliderContainer>
            <SimpleSlider></SimpleSlider>
        </StyledSliderContainer>
    )
}

export default SliderContainer