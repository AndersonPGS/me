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
          <a href="https://github.com/andersonpgs">GITHUB</a>
        </div>
        <div className="button">
          <a href="linkedin.com/in/andersonpgs">LINKEDIN</a>
        </div>
        <div className="button">
          <a>DISCORD</a>
        </div>
      </div>
    </Container>
  );
};

export default Home;
