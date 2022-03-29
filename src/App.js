import styled, {createGlobalStyle} from "styled-components"
import TopText from "./components/Top-text";

const AppWrapper = styled.div`
width: 100%;
height: 100vh;
background-color: black;
`

function App() {
  return (
    <AppWrapper>
      <TopText />
      </AppWrapper>
  );
}

export default App;
