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
        <div className="button">
          <a href="https://github.com/andersonpgs">Github</a>
        </div>
        <div className="button">
          <a href="linkedin.com/in/andersonpgs">Linkedin</a>
        </div>
        <div className="button">
          <a>Discord</a>
        </div>
      </div>
    </Container>
  );
};

export default Home;
