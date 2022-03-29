import styled, {createGlobalStyle} from "styled-components"
import TopText from "./components/Top-text";
import Flex from "./components/Flex";


const AppWrapper = styled.div`
width: 100%;
height: 100vh;
background-color: purple;
`

function App() {
  return (
    <AppWrapper>
      <Flex justify = "center">
      <TopText color = {"red"} >Top</TopText>
      </Flex>
      
      </AppWrapper>
  );
}

export default App;
