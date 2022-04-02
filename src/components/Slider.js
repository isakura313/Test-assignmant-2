import Slider from "react-slick";
import React, {Component} from 'react'
import styled, {createGlobalStyle} from "styled-components"

const UserCard = styled.div`
height: 100px;
width: 100px;
background-color: grey;
`

class SimpleSlider extends Component {
  render() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };
    return (
        <div>
        <h2> Multiple items </h2>
        <Slider {...settings}>
          <div>
            <UserCard/>
          </div>
          <div>
          <UserCard/>
          </div>
          <div>
          <UserCard/>
          </div>
          <div>
          <UserCard/>
          </div>
          <div>
          <UserCard/>
          </div>
          <div>
          <UserCard/>
          </div>
          <div>
          <UserCard/>
          </div>
          <div>
          <UserCard/>
          </div>
          <div>
          <UserCard/>
          </div>
        </Slider>
      </div>
    );
  }
}


export default SimpleSlider