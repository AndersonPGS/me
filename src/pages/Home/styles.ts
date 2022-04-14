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
    transform: scale(1.01);
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
    font-style: italic;
  }

  .buttons {
    display: flex;
    width: 100%;
    justify-content: center;
    .button {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 15px;
      height: 50px;
      width: 25%;
      margin: 10px;
      background-color: rgba(0, 0, 0, 0.7);
      transition: all 0.2s;
      a {
        color: white;
        font-size: 1.3rem;
        font-weight: bold;
        text-decoration: none;
      }
      &:hover {
        transform: scale(1.1);
        background-color: rgba(0, 0, 0, 0.4);
        border-radius: 10px;
        cursor: pointer;
      }
    }
  }
`;
