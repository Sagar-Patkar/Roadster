import React from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { Container } from "react-bootstrap";

const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <h1>Welcome to Roadsters</h1>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
