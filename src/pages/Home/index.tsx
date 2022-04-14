import React from "react";
import { Container } from "./styles";

const Home: React.FC = () => {
  return (
    <Container>
      <img
        src="https://avatars.githubusercontent.com/u/57535111?v=4"
        alt="Github Profile"
      />
      <p>Anderson Paiva</p>
      <div className="buttons">
        <button>Github</button>
        <button>Linkedin</button>
        <button>Discord</button>
      </div>
    </Container>
  );
};

export default Home;
