import Slider from "react-slick";
import React, {Component} from 'react'
import styled, {createGlobalStyle} from "styled-components"

import arrow1 from "../svg/right-arrow.svg"
import arrow2 from "../svg/left-arrow.svg"

import ProfilePic from "./ProfilePic";

import id1 from "../pics/jpg/portrait1.jpg"


// import Id1 from "../pics/jpg/Portrait 1.jpg"
// import Antonette from "../pics/jpg/Portrait 2.jpg"
// import Samantha from "../pics/jpg/Portrait 3.jpg"
// import portrait4 from "../pics/jpg/Portrait 4.jpg"
// import portrait5 from "../pics/jpg/Portrait 5.jpg"
// import portrait6 from "../pics/jpg/Portrait 6.jpg"
// import portrait7 from "../pics/jpg/Portrait 7.jpg"
// import portrait8 from "../pics/jpg/Portrait 8.jpg"
// import portrait9 from "../pics/jpg/Portrait 9.jpg"
// import portrait10 from "../pics/jpg/Portrait 10.jpg"


const UserName = styled.div`
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 36px;
margin-top: 19px;
text-align: center;
display: inline-block;
color: #384758;
margin-left: 6.5%;
color: ${props => props.color};
`
const UserSkills = styled.div`
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
margin-left: 6.5%;
color: ${props => props.color};
`

const UserPic = styled.div`
background-image: url(${id1});
background-size: cover;
width: 290px;
height: 320px;
// border: 5px solid orange;
margin: 20px auto auto auto;
border-bottom: ${props => props.border};
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
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            border: "",
            color: ""
        }
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.handleClick = this.handleClick.bind(this);
      }

      

      componentDidMount() {
          fetch("https://jsonplaceholder.typicode.com/users")
          .then(res => res.json())
          .then(
              (result) => {
                  this.setState({
                  items: result //users?
              });
              console.log(this.state.items)
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                })
            }
          )
        }
        handleClick(event){
          this.setState({
            border: "5px solid rgba(254, 135, 0, 1)",
            color: "rgba(254, 135, 0, 1)"
        })
          console.log(this.state.border, event.target)
        }
      next() {
        this.slider.slickNext();
      }
      previous() {
        this.slider.slickPrev();
      }

  render() {
    const {error, isLoaded, items} = this.state;
    if (error) {
        console.log("Error!")
    }   else if (!isLoaded) {
        console.log("Loadnig...")
    }   else {
        console.log(this.state.items[0].name)
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false
    };

console.log(this.state.items[0])
    return (
        <div style={{ border: "1px solid blue"}}>

        <div style={{ textAlign: "center"}}>
          <PreviousButton onClick={this.previous}></PreviousButton>
          <NextButton onClick={this.next}></NextButton>
          
        </div>

        <Slider ref={c => (this.slider = c)} {...settings}>
                 
        {/* <div> {`${JSON.stringify(this.state.items[0])}`}</div> 
        <div> {this.state.isLoaded}</div> */}
          
                   {items.map(item => (
                     <div>
                       {/* <img width = {"290px"} height={"320px"} src={id1}/> */}
                       {/* <ProfilePic src={`id${item.id}`}></ProfilePic> */}
                       <UserPic border={this.state.border}className={"wassup"} onClick = {this.handleClick} srcimg = {"portrait1"}></UserPic>
                       <UserName color = {this.state.color} onClick = {this.handleClick}>{item.name}</UserName> <br></br>
                       <UserSkills color = {this.state.color} onClick = {this.handleClick}>{item.company.name}</UserSkills>
                       </div>
                   ))} 
               
           {/* <div>  
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
          <div>  
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
          <div>  
           <img width = {"290px"} height={"320px"} src={portrait9} alt="arrow" />
           <UserName>Name</UserName> <br></br>
           <UserSkills>Technology</UserSkills>
          </div>
          <div>
          <img width = {"290px"} height={"320px"} src={portrait10} alt="arrow" />
          <UserName>Name</UserName> <br></br>
           <UserSkills>Technology</UserSkills>
          </div>  */}  

{/*<div key={1}>*/}

        </Slider>
        {/* <ul>
                   {items.map(item => (
                       <li key={item.id}>
                         {item.name}
                       </li>
                   ))}
                </ul> */}



                {/* <div>
                   {items.map(item => (
                     <div>
                       <UserName>{item.id}</UserName> <br></br>
                       <UserSkills>{item.name}</UserSkills>
                       </div>
                   ))}
                </div> */}
               
      </div>
    );
        
  }
}


export default SimpleSlider