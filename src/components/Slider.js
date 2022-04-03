import Slider from "react-slick";
import React, {Component} from 'react'
import styled, {createGlobalStyle} from "styled-components"

import arrow1 from "../svg/right-arrow.svg"
import arrow2 from "../svg/left-arrow.svg"

import ProfilePic from "./ProfilePic";

import id1 from "../pics/jpg/portrait1.jpg"
import id2 from "../pics/jpg/portrait2.jpg"
import id3 from "../pics/jpg/portrait3.jpg"
import id4 from "../pics/jpg/portrait4.jpg"
import id5 from "../pics/jpg/portrait5.jpg"
import id6 from "../pics/jpg/portrait6.jpg"
import id7 from "../pics/jpg/portrait7.jpg"
import id8 from "../pics/jpg/portrait8.jpg"
import id9 from "../pics/jpg/portrait9.jpg"
import id10 from "../pics/jpg/portrait10.jpg"




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
cursor: pointer;
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
cursor: pointer;
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

      

      // componentDidMount() {
      //     fetch("https://jsonplaceholder.typicode.com/users")
      //     .then(res => res.json())
      //     .then(
      //         (result) => {
      //             this.setState({
      //             items: result //users?
      //         });
      //         console.log(this.state.items)
      //       },
      //       (error) => {
      //           this.setState({
      //               isLoaded: true,
      //               error
      //           })
      //       }
      //     )
      //   }

      componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                items: result
              });
            },
            // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
            // чтобы не перехватывать исключения из ошибок в самих компонентах.
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }

        handleClick(event){
          this.setState({
            border: "5px solid rgba(254, 135, 0, 1)",
            color: "rgba(254, 135, 0, 1)"
        })
        // event.target.style.borderBottom = "5px solid rgba(254, 135, 0, 1)";
        //   console.log(this.state.border, event.target)
         }
      next() {
        this.slider.slickNext();
      }
      previous() {
        this.slider.slickPrev();
      }

  render() {
    const { error, isLoaded, items } = this.state;
    // if (error) {
    //     console.log("Error!")
    // }   else if (!isLoaded) {
    //     console.log("Loading...")
    // }   else {
    //     console.log(this.state.items[0].name)
    // }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false
    };


    
    

console.log(this.state.items[0])

if (error) {
  return <div>Ошибка: {error.message}</div>;
} else if (!isLoaded) {
  return <div>Загрузка...</div>;
} else {
    return (
        <div style={{ border: "1px solid blue"}}>

        <div style={{ textAlign: "center"}}>
          <PreviousButton onClick={this.previous}></PreviousButton>
          <NextButton onClick={this.next}></NextButton>
          
        </div>

        <Slider ref={c => (this.slider = c)} {...settings}>
                 



          {/* <div>{this.state.items[0].name}</div> */}
          
                   {/* {this.state.items.map(item => (
                     <div>
                        <img width = {"290px"} height={"320px"} src={id1}/> 
                        <ProfilePic src={`id${item.id}`}></ProfilePic> 
                       <UserPic border={this.state.border} className={"wassup"} onClick = {this.handleClick} srcimg = {"portrait1"}></UserPic>
                       <UserName color = {this.state.color} onClick = {this.handleClick}>{item.name}</UserName> <br></br>
                       <UserSkills color = {this.state.color} onClick = {this.handleClick}>{item.username}</UserSkills>
                       </div>
                   ))}  */}
               
            <div>  
           <img style={{ margin: "20px auto auto auto", cursor: "pointer", backgroundSize: "cover"}} width = {"290px"} height={"320px"} src={id1} alt="userpic" />
           <UserName>{this.state.items[0].name}</UserName> <br></br>
           <UserSkills>{this.state.items[0].username}</UserSkills>
          </div>
          <div>
          <img style={{ margin: "20px auto auto auto"}} width = {"290px"} height={"320px"} src={id2} alt="userpic" />
          <UserName>{this.state.items[1].name}</UserName> <br></br>
           <UserSkills>{this.state.items[1].username}</UserSkills>
          </div>
          <div>
          <img style={{ margin: "20px auto auto auto", backgroundSize: "cover"}} width = {"290px"} height={"320px"} src={id3} alt="userpic" />
          <UserName>{this.state.items[2].name}</UserName> <br></br>
           <UserSkills>{this.state.items[2].username}</UserSkills>
          </div>
          <div>
          <img style={{ margin: "20px auto auto auto"}} width = {"290px"} height={"320px"} src={id4} alt="userpic" />
          <UserName>{this.state.items[3].name}</UserName> <br></br>
           <UserSkills>{this.state.items[3].username}</UserSkills>
          </div>
          <div>  
          <img style={{ margin: "20px auto auto auto"}} width = {"290px"} height={"320px"} src={id5} alt="userpic" />
           <UserName>{this.state.items[4].name}</UserName> <br></br>
           <UserSkills>{this.state.items[4].username}</UserSkills>
          </div>
          <div>
          <img style={{ margin: "20px auto auto auto"}} width = {"290px"} height={"320px"} src={id6} alt="userpic" />
          <UserName>{this.state.items[5].name}</UserName> <br></br>
           <UserSkills>{this.state.items[5].username}</UserSkills>
          </div>
          <div>
          <img style={{ margin: "20px auto auto auto"}} width = {"290px"} height={"320px"} src={id7} alt="userpic" />
          <UserName>{this.state.items[6].name}</UserName> <br></br>
           <UserSkills>{this.state.items[6].username}</UserSkills>
          </div>
          <div>
          <img style={{ margin: "20px auto auto auto"}} width = {"290px"} height={"320px"} src={id8} alt="userpic" />
          <UserName>{this.state.items[7].name}</UserName> <br></br>
           <UserSkills>{this.state.items[7].username}</UserSkills>
          </div>
          <div>  
          <img style={{ margin: "20px auto auto auto"}} width = {"290px"} height={"320px"} src={id9} alt="userpic" />
           <UserName>{this.state.items[8].name}</UserName> <br></br>
           <UserSkills>{this.state.items[8].username}</UserSkills>
          </div>
          <div>
          <img style={{ margin: "20px auto auto auto"}} width = {"290px"} height={"320px"} src={id10} alt="userpic" />
          <UserName>{this.state.items[9].name}</UserName> <br></br>
           <UserSkills>{this.state.items[9].username}</UserSkills>
          </div>    

{/*<div key={1}>*/}

        </Slider>
        {/* <div>{this.state.items[4].name}</div> */}
        {/* <ul>
                   {items.map(item => (
                       <li key={item.id}>
                         {item.name}
                       </li>
                   ))}
                </ul> */}

               
      </div>
    );
        
  }
}
}

export default SimpleSlider