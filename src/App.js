import styled, {createGlobalStyle} from "styled-components"
import TopText from "./components/Top-text";
import CommonText from "./components/Common-text";
import UnderTopText from "./components/UnderTopText";
import Flex from "./components/Flex";
import Square from "./components/Square"
import commasImage from "../src/svg/commas.svg"
import ellipseImage from "../src/svg/ellipse.svg"

import Arrows from "./components/Arrows";
import SliderContainer from "./components/Slider-container";

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
margin-left: 251px;
`

const Ellipse = styled.div`
background-image: url(${ellipseImage});
width: 169px;
height: 137px;
display: block;
margin-left: 1367px;
position: absolute;
margin-top: -290px;
`

function App() {
  return (
    <AppWrapper>
      <Flex justify = "center">
      <TopText marginTop = {"64px"} width = {"32%"}>Наши топ-блогеры</TopText>
      <CommonText width = {"28%"}>Лучше специалисты в своем деле, 
средний опыт работы в профессии - 27 лет</CommonText>
      <Arrows marginTop = {"31px"} />
      <Square margin={"-636px 0 0 1352px"}/>
      <Ellipse />
      <SliderContainer>

      </SliderContainer>
      <Flex margin={"51px 0 0 0"} justify = "start" height={"78px"} align={"center"} direction={"row"}>
      <Commas />
      <TopText margin = {"0 0 0 34px"} textAlign = {"start"} width = {"66.38%"} height={"78px"}>
        3 актуальных поста Moriah.Stanton
        </TopText>
      </Flex>
      
      <UnderTopText>Заголовок поста</UnderTopText>
      <CommonText margin = {"7px 0 0 385px"} width = {"959px"} textAlign = {"start"}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis nec platea ipsum ornare interdum. 
        Aliquet metus suscipit ornare aliquet accumsan, massa risus quisque ac. Pellentesque risus mauris mattis viverra amet sed elit. 
        Pellentesque dui vitae amet diam convallis nisi nec.
        </CommonText>
        <UnderTopText margin = {"19px 0 0 385px"}>Заголовок поста</UnderTopText>
      <CommonText margin = {"7px 0 0 385px"} width = {"959px"} textAlign = {"start"}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis nec platea ipsum ornare interdum. 
        Aliquet metus suscipit ornare aliquet accumsan, massa risus quisque ac. Pellentesque risus mauris mattis viverra amet sed elit. 
        Pellentesque dui vitae amet diam convallis nisi nec.
        </CommonText>
        <UnderTopText margin = {"19px 0 0 385px"}>Заголовок поста</UnderTopText>
      <CommonText margin = {"7px 0 125px 385px"} width = {"959px"} textAlign = {"start"}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis nec platea ipsum ornare interdum. 
        Aliquet metus suscipit ornare aliquet accumsan, massa risus quisque ac. Pellentesque risus mauris mattis viverra amet sed elit. 
        Pellentesque dui vitae amet diam convallis nisi nec.
        </CommonText>

        <Square />


      </Flex>
      


      </AppWrapper>
  );
}

export default App;
