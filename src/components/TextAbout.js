import React from 'react';
import Flex from "./Flex";
import styled, {createGlobalStyle} from "styled-components"
import ellipseImage from "../../src/svg/ellipse.svg"
import TopText from "./Top-text";
import CommonText from "./Common-text";
import UnderTopText from "./UnderTopText";
import commasImage from "../../src/svg/commas.svg"


const AppWrapper = styled.div`
width: 100%;
height: 100%;
// background-color: grey;
`
const Commas = styled.div`
background-image: url(${commasImage});
height: 78px;
width: 100px;
display: block;
margin-left: 17.43%;
`

const Ellipse = styled.div`
background-image: url(${ellipseImage});
width: 169px;
height: 137px;
display: block;F
margin-left: 1367px;
position: absolute;
margin-top: -290px;
`

export default function TextAbout(props){
    console.log(props.posts)
    if(props.posts.length != 0){
    return (
        <React.Fragment>
    <Flex margin={"51px 0 0 0"} justify = "start" height={"78px"} align={"center"} direction={"row"}>
    <Commas />
    <TopText margin = {"0 0 0 2.36%"} textAlign = {"start"} width = {"66.38%"} height={"78px"}>
      3 актуальных поста Moriah.Stanton
      </TopText>
    </Flex>
    
    <UnderTopText>{props.posts[0].title}</UnderTopText>
    <CommonText margin = {"7px 0 0 26.73%"}  width = {"66.57%"} textAlign = {"start"} fontSize={"20px"}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis nec platea ipsum ornare interdum. 
      Aliquet metus suscipit ornare aliquet accumsan, massa risus quisque ac. Pellentesque risus mauris mattis viverra amet sed elit. 
      Pellentesque dui vitae amet diam convallis nisi nec.
      </CommonText>
      <UnderTopText margin = {"19px 0 0 26.73%"}>{props.posts[1].title}</UnderTopText>
    <CommonText margin = {"7px 0 0 26.73%"}  width = {"66.57%"} textAlign = {"start"} fontSize={"20px"}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis nec platea ipsum ornare interdum. 
      Aliquet metus suscipit ornare aliquet accumsan, massa risus quisque ac. Pellentesque risus mauris mattis viverra amet sed elit. 
      Pellentesque dui vitae amet diam convallis nisi nec.
      </CommonText>
      <UnderTopText margin = {"19px 0 0 26.73%"}>{props.posts[2].title}</UnderTopText>
    <CommonText margin = {"7px 0 125px 26.73%"} width = {"66.57%"} textAlign = {"start"} fontSize={"20px"}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis nec platea ipsum ornare interdum. 
      Aliquet metus suscipit ornare aliquet accumsan, massa risus quisque ac. Pellentesque risus mauris mattis viverra amet sed elit. 
      Pellentesque dui vitae amet diam convallis nisi nec.
      </CommonText>
    </React.Fragment>)
    } else{
        return(
            <div> подождите</div>
        )
    }
}