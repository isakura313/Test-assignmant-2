import styled, {createGlobalStyle} from "styled-components"
import TopText from "./components/Top-text";
import CommonText from "./components/Common-text";
import UnderTopText from "./components/UnderTopText";
import Flex from "./components/Flex";
import Square from "./components/Square"
import commasImage from "../src/svg/commas.svg"
import ellipseImage from "../src/svg/ellipse.svg"
import {useState, useEffect} from 'react';
import Arrows from "./components/Arrows";
import SliderContainer from "./components/Slider-container";
import SimpleSlider from "./components/Slider";
import TextAbout from './components/TextAbout';
import axios from 'axios';
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

function App() {

  let [currentUser, updateCurrentUser] = useState(1);
  let [posts, updatePosts] = useState([]);
  const handleClick = (e) =>{
    updateCurrentUser(e);
  }
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://jsonplaceholder.typicode.com/posts?userId=${Number(currentUser)+1}`,
      );
        console.log(result.data)
      updatePosts(result.data);
    };
    fetchData();
  }, [currentUser]);


  return (
    <AppWrapper>
      <h1>    {currentUser}</h1>
      <Flex justify = "center">
      <TopText marginTop = {"64px"} width = {"32%"}>Наши топ-блогеры</TopText>
      <CommonText width = {"28%"}>Лучше специалисты в своем деле, <br></br>
      средний опыт работы в профессии - 27 лет</CommonText>
      {/* <Arrows marginTop = {"31px"} /> */}
      <Square margin={"-636px 0 0 1352px"}/>
      <Ellipse />
      <SliderContainer handle={handleClick}>
      <SimpleSlider  />
      </SliderContainer>

      <Flex margin={"51px 0 0 0"} justify = "start" height={"78px"} align={"center"} direction={"row"}>
      <Commas />
      {/* <TopText margin = {"0 0 0 2.36%"} textAlign = {"start"} width = {"66.38%"} height={"78px"}>
        3 актуальных поста Moriah.Stanton
        </TopText> */}
      </Flex>
      
       <TextAbout  posts={posts}/>
        <Square />


      </Flex>
      


      </AppWrapper>
  );
}

export default App;
