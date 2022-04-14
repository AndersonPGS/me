import styled from "styled-components";

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.6);
  height: 80vh;
  width: 70%;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: all 0.3s;
  &:hover {
    transform: scale(1.1);
  }

  img {
    height: 300px;
    border-radius: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    transition: all 0.3s;

    &:hover {
      background-color: rgba(0, 0, 0, 0.7);
      transform: scale(1.1);
    }
  }

  p {
    margin: 20px;
    font-size: 2rem;
    color: white;
    font-weight: bold;
  }

  button {
    border: none;
    border-radius: 15px;
    height: 50px;
    width: 100px;
    margin: 10px;
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    font-size: 1rem;
    font-weight: bold;
    transition: all 0.2s;

    &:hover {
      transform: scale(1.2);
      background-color: rgba(0, 0, 0, 0.4);
      border-radius: 10px;
      cursor: pointer;
    }
  }
`;
