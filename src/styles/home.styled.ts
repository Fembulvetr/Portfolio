import styled from "styled-components";

export const HomeWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 80%;
  align-items: center;

  @media (max-width: 768px) {
    height: 100vh;
  }
`;

export const TextBlock = styled.div`
  color: #fff;
  padding-left: 100px;

  @media (max-width: 700px) {
    padding-left: 40px;
  }
`;

export const Title = styled.div`
  font-size: 5.5em;
  font-weight: 900;
  padding-bottom: 10px;
  letter-spacing: 3px;

  span {
    color: #f5d393;
  }

  @media (min-width: 1800px) {
    font-size: 7.5em;
  }

  @media (min-width: 2200px) {
    font-size: 8.5em;
  }

  @media (max-width: 992px) {
    font-size: 4em;
  }

  @media (max-width: 500px) {
    font-size: 48px;
  }
`;

export const Description = styled.div`
  font-size: 2.13em;
  font-weight: 500;
  max-width: 50%;
  padding-bottom: 30px;

  @media (min-width: 1800px) {
    font-size: 3em;
  }

  @media (min-width: 2200px) {
    font-size: 4em;
  }

  @media (max-width: 992px) {
    font-size: 1.6em;
  }

  @media (max-width: 700px) {
    font-size: 1.4em;
  }

  @media (max-width: 500px) {
    font-size: 18px;
  }
`;

export const Button = styled.div`
  font-size: 1.13em;
  text-transform: uppercase;
  width: 28%;
  display: flex;
  justify-content: center;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 7%;
    height: 100%;
    background-color: #f5d393;
    z-index: 1;
    transition: width 0.3s ease;
  }

  &:hover:before {
    width: 100%;
  }

  &:hover {
    a {
      &:before {
        width: 8%;
      }
    }
  }

  a {
    width: 100%;
    text-decoration: none;
    color: #000;
    z-index: 1;
    display: flex;
    justify-content: center;
    padding-block: 0.6em;
    padding-inline: 0.6em;

    p {
      margin: 0;
    }

    &:before {
      content: "";
      position: absolute;
      top: 50%;
      left: 15%;
      width: 0%;
      height: 2px;
      background-color: #000;
      z-index: 1;
      transition: width 0.3s ease;
    }
  }

  background-color: #fff;

  @media (min-width: 1800px) {
    font-size: 1.5em;
  }

  @media (min-width: 2200px) {
    font-size: 2.2em;
  }

  @media (max-width: 500px) {
    width: 40%;
    font-size: 16px;
  }
`;
