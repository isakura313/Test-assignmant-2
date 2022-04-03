import styled, { createGlobalStyle } from "styled-components";
import React from 'react';
import arrow1 from "../svg/right-arrow.svg";
import arrow2 from "../svg/left-arrow.svg";
import { useState } from 'react';
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

 function SliderItems(props){
 
     // через выделять через клик
   const list =  props.items.map((item, index)=>{
       return( <div key={index} className={"sliderItem"}>
        <UserPic
          id={index}
        //   borderBottom={state.border}
        // className={"wassup " + (select === index ? 'active' : '')
          className={"wassup"}
          onClick={(item)=>props.handleClick(item)}
          srcimg={`./jpg/portrait${index+1}.jpg`}
        ></UserPic>{" "}
        <UserName
            id={index}
        //   color={this.state.color}
          onClick={props.handleClick}
        >
          {" "}
          {item.name}{" "}
        </UserName>{" "}
        <br></br>
        <UserSkills
          id="1"
        //   color={this.state.color}
          onClick={props.handleClick}
        >
          {" "}
          {item.username}{" "}
        </UserSkills>
      </div>)
    })
    console.log(list)
    return (
        <React.Fragment>
            {list}
        </React.Fragment>
    )
    
}
export default SliderItems;