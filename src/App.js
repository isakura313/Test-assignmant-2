import styled, {createGlobalStyle} from "styled-components"
import TopText from "./components/Top-text";
import CommonText from "./components/Common-text";
import UnderTopText from "./components/UnderTopText";
import Flex from "./components/Flex";

import Arrows from "./components/Arrows";
import SliderContainer from "./components/Slider-container";

const AppWrapper = styled.div`
width: 100%;
height: 100%;
background-color: purple;
`


function App() {
  return (
    <AppWrapper>
      <Flex justify = "center">
      <TopText marginTop = {"64px"} width = {"32%"}>Наши топ-блогеры</TopText>
      <CommonText marginTop = {"47px"} width = {"28%"}>Лучше специалисты в своем деле, 
средний опыт работы в профессии - 27 лет</CommonText>
      <Arrows marginTop = {"31px"} />
      <SliderContainer>

      </SliderContainer>

      <TopText marginTop = {"44px"} textAlign = {"start"} width = {"66.38%"} height={"78px"} >3 актуальных поста Moriah.Stanton</TopText>
      <UnderTopText>Заголовок поста</UnderTopText>
      </Flex>
      
      </AppWrapper>
  );
}

export default App;
