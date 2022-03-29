import styled, {createGlobalStyle} from "styled-components"
import TopText from "./components/Top-text";

const AppWrapper = styled.div`
width: 100%;
height: 100vh;
background-color: purple;
`

function App() {
  return (
    <AppWrapper>
      <TopText color = {"red"} >Top</TopText>
      </AppWrapper>
  );
}

export default App;
