import React from 'react'
import styled from "styled-components"
import SimpleSlider from './Slider'

const StyledSliderContainer = styled.div`
z-index: 5;
background-color: white;
width: 87%;
min-width: 500px;
height: 397px;
border: 1px solid black;
margin: 20px auto auto auto;
`

function SliderContainer() {
    return(
        <StyledSliderContainer>
            <SimpleSlider></SimpleSlider>
        </StyledSliderContainer>
    )
}

export default SliderContainer