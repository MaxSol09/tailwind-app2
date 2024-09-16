import React from "react";
import { Wrapper } from "./Wrapper";
import { Header } from "./Header";
import { Main } from "./Main";
import { Footer } from "./Footer";

function App() {
  return (
    <div>
    <Header></Header>
    <Wrapper>
      <Main></Main>
    </Wrapper>
    <Footer></Footer>
    </div>
  );
}

export default App;
