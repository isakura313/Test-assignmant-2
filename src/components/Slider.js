import Slider from "react-slick";
import React, { Component } from "react";
import styled, { createGlobalStyle } from "styled-components";
import SliderItems from "./SliderItems";
import arrow1 from "../svg/right-arrow.svg";
import arrow2 from "../svg/left-arrow.svg";

import ProfilePic from "./ProfilePic";




class SimpleSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      border: "",
      color: "",
      selectNumber: 0
      //   currentUser: 0
    };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }


  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  handleClick(event) {
    console.log(event.target.id);
    this.props.handleClick(event.target.id);
    this.setState({
      selectNumber: Number(event.target.id)
    })
  }

  next() {
    this.slider.slickNext();
  }

  previous() {
    this.slider.slickPrev();
  }

  render() {
    const { error, isLoaded, items } = this.state;


    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false
    };

    console.log(this.state.items[0]);

    if (error) {
      return <div> Ошибка: {error.message} </div>;
    } else if (!isLoaded) {
      return <div> Загрузка... </div>;
    } else {
      return (
        <div style={{ border: "1px solid blue" }}>
          <div style={{ textAlign: "center" }}>
            <PreviousButton onClick={this.previous}> </PreviousButton>{" "}
            <NextButton onClick={this.next}> </NextButton>
          </div>
          <Slider ref={(c) => (this.slider = c)} {...settings}>
            {items.map((item, index) => {
              return (
                <div key={index} className={"sliderItem"}>
                  <UserPic
                    id={index}
                    className={"wassup "+(this.state.selectNumber === index ? 'active' : '')}
                    onClick={(item) =>this.handleClick(item)}
                    srcimg={`./jpg/portrait${index + 1}.jpg`}
                  ></UserPic>{" "}
                  <UserName
                    id={index}
                    //   color={this.state.color}
                    onClick={this.handleClick}
                  >
                    {" "}
                    {item.name}{" "}
                  </UserName>{" "}
                  <br></br>
                  <UserSkills
                    id="1"
                    //   color={this.state.color}
                    onClick={this.handleClick}
                  >
                    {" "}
                    {item.username}{" "}
                  </UserSkills>
                </div>
              );
            })}
          </Slider>{" "}
        </div>
      );
    }
  }
}

export default SimpleSlider;

const UserName = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  margin-top: 19px;
  text-align: center;
  display: inline-block;
  color: #384758;
  margin-left: 6.5%;
  color: ${(props) => props.color};
  cursor: pointer;
`;
const UserSkills = styled.div`
  text-align: center;
  display: inline-block;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  color: #606f81;
  padding: 0;
  margin-top: -5px;
  margin-left: 6.5%;
  color: ${(props) => props.color};
  cursor: pointer;
`;

const UserPic = styled.div`
  background-image: url(${(props) => props.srcimg});
  background-size: cover;
  width: 290px;
  height: 320px;
  // border: 5px solid orange;
  margin: 20px auto auto auto;
  border-bottom: ${(props) => props.borderBottom};
  cursor: pointer;
`;

const PreviousButton = styled.button`
  background-image: url(${arrow1});
  width: 50px;
  height: 50px;
  border-radius: 100%;
  margin-right: 19px;
  cursor: pointer;
`;
const NextButton = styled.button`
  background-image: url(${arrow2});
  width: 50px;
  height: 50px;
  border-radius: 100%;
  cursor: pointer;
`;
