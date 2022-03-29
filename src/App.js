import styled, {createGlobalStyle} from "styled-components"
import TopText from "./components/Top-text";
import Flex from "./components/Flex";
import CommonText from "./components/Common-text";
import Arrows from "./components/Arrows";


const AppWrapper = styled.div`
width: 100%;
height: 100vh;
background-color: purple;
`

function App() {
  return (
    <AppWrapper>
      <Flex justify = "center">
      <TopText marginTop = {"64px"} width = {"32%"}>Наши топ-блогеры</TopText>
      <CommonText marginTop = {"47px"} width = {"28%"}>Лучше специалисты в своем деле, 
средний опыт работы в профессии - 27 лет</CommonText>
      <Arrows marginTop = {"31px"}>
        
      </Arrows>
      

      </Flex>
      
      </AppWrapper>
  );
}

export default App;
