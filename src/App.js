import styled from "styled-components";
import Global from "./Global";
import NavBar from "./includes/NavBar";

function App() {
  return (
    <Container>
      <Global />
      <NavBar />
    </Container>
  );
};

const Container = styled.div`
 width: 100%;
`;
export default App;
