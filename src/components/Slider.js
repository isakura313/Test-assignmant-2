import Slider from "react-slick";
import React, {Component} from 'react'
import styled, {createGlobalStyle} from "styled-components"

import arrow1 from "../svg/right-arrow.svg"
import arrow2 from "../svg/left-arrow.svg"
import portrait1 from "../pics/jpg/Portrait 1.jpg"
import portrait2 from "../pics/jpg/Portrait 2.jpg"
import portrait3 from "../pics/jpg/Portrait 3.jpg"
import portrait4 from "../pics/jpg/Portrait 4.jpg"
import portrait5 from "../pics/jpg/Portrait 5.jpg"
import portrait6 from "../pics/jpg/Portrait 6.jpg"
import portrait7 from "../pics/jpg/Portrait 7.jpg"
import portrait8 from "../pics/jpg/Portrait 8.jpg"
import portrait9 from "../pics/jpg/Portrait 9.jpg"
import portrait10 from "../pics/jpg/Portrait 10.jpg"

const UserCard = styled.div`
height: 320px;
width: 290px;

`
const UserName = styled.span`
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 36px;
margin-top: 19px;
text-align: center;
display: inline-block;
color: #384758;

`
const UserSkills = styled.text`
text-align: center;
display: inline-block;
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 27px;
text-align: center;
color: #606F81;
padding: 0;
margin-top: -5px;
`

const PreviousButton = styled.button`
background-image: url(${arrow1});
width: 50px;
height: 50px;
border-radius: 100%;
margin-right: 19px;
cursor: pointer;
`
const NextButton = styled.button`
background-image: url(${arrow2});
width: 50px;
height: 50px;
border-radius: 100%;
cursor: pointer;
`

class SimpleSlider extends Component {

    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
      }
      next() {
        this.slider.slickNext();
      }
      previous() {
        this.slider.slickPrev();
      }

  render() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4
    };
    return (
        <div style={{ border: "1px solid blue"}}>

        <div style={{ textAlign: "center"}}>
          <PreviousButton onClick={this.previous}></PreviousButton>
          <NextButton onClick={this.next}></NextButton>
          {/* <button className="button" onClick={this.next}>
            Next
          </button> */}
        </div>

        <Slider ref={c => (this.slider = c)} {...settings}>
           <div>  {/*<div key={1}>*/}
           <img width = {"290px"} height={"320px"} src={portrait1} alt="arrow" />
           <UserName>Name</UserName> <br></br>
           <UserSkills>Technology</UserSkills>
          </div>
          <div>
          <img width = {"290px"} height={"320px"} src={portrait2} alt="arrow" />
          <UserName>Name</UserName> <br></br>
           <UserSkills>Technology</UserSkills>
          </div>
          <div>
          <img width = {"290px"} height={"320px"} src={portrait3} alt="arrow" />
          <UserName>Name</UserName> <br></br>
           <UserSkills>Technology</UserSkills>
          </div>
          <div>
          <img width = {"290px"} height={"320px"} src={portrait4} alt="arrow" />
          <UserName>Name</UserName> <br></br>
           <UserSkills>Technology</UserSkills>
          </div>
          <div>  {/*<div key={1}>*/}
           <img width = {"290px"} height={"320px"} src={portrait5} alt="arrow" />
           <UserName>Name</UserName> <br></br>
           <UserSkills>Technology</UserSkills>
          </div>
          <div>
          <img width = {"290px"} height={"320px"} src={portrait6} alt="arrow" />
          <UserName>Name</UserName> <br></br>
           <UserSkills>Technology</UserSkills>
          </div>
          <div>
          <img width = {"290px"} height={"320px"} src={portrait7} alt="arrow" />
          <UserName>Name</UserName> <br></br>
           <UserSkills>Technology</UserSkills>
          </div>
          <div>
          <img width = {"290px"} height={"320px"} src={portrait8} alt="arrow" />
          <UserName>Name</UserName> <br></br>
           <UserSkills>Technology</UserSkills>
          </div>
          <div>  {/*<div key={1}>*/}
           <img width = {"290px"} height={"320px"} src={portrait9} alt="arrow" />
           <UserName>Name</UserName> <br></br>
           <UserSkills>Technology</UserSkills>
          </div>
          <div>
          <img width = {"290px"} height={"320px"} src={portrait10} alt="arrow" />
          <UserName>Name</UserName> <br></br>
           <UserSkills>Technology</UserSkills>
          </div>
        </Slider>
      </div>
    );
  }
}


export default SimpleSlider