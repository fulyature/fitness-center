import Header from "./components/Header";
import Nav from "./components/Nav";
import Container from "./components/styled/Container";
import { GlobalStyles } from "./components/styled/GlobalStyles";

import { ThemeProvider } from "styled-components";

function App() {
  const styles = {
    colors: {
      primary: "#331D2C",
      secondary: "#3F2E3E",
    },
    breakpoints: { xs: "300px", sm: "500px", md: "750px" },
    margin: {},
    padding: {},
  };
  return (
    <ThemeProvider theme={styles}>
      <GlobalStyles />
      <Nav />
      <Container>
        <Header />
      </Container>
    </ThemeProvider>
  );
}

export default App;
