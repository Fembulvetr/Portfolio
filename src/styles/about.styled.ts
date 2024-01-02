import styled, { keyframes, css } from "styled-components";

//----------------------------------------------

const slideDownText = keyframes`
 ${css`
   from {
     opacity: 0;
     transform: translateY(-20px);
   }
   to {
     opacity: 1;
     transform: translateY(0);
   }
 `}
`;

//-----------------------------------------------

export const AboutWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  height: 95%;
  align-items: center;
  color: #fff;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding-top: 20px;
    padding-bottom: 20px;
  }
`;

export const Title = styled.div`
  font-size: 4em;
  font-weight: 900;
  padding-bottom: 40px;
  color: #f5d393;
`;

export const Text = styled.div`
  font-size: 1.2em;
  font-weight: 500;
  line-height: 130%;

  @media (min-width: 1800px) {
    font-size: 1.4em;
  }

  @media (min-width: 2200px) {
    font-size: 1.8em;
  }

  @media (max-width: 992px) {
    font-size: 1em;
  }

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const Divider = styled.div`
  width: 40%;
  height: 2px;
  background-color: #f5d393;
  border-radius: 1px;
  margin: 60px 30px;

  @media (max-width: 768px) {
    width: 60%;
    margin: 30px 0;
  }
`;

export const Avatar = styled.img`
  width: 400px;
  height: 400px;
  position: relative;
  border-radius: 50%;
  margin: 0 auto;

  @media (min-width: 2200px) {
    width: 500px;
    height: 500px;
  }

  @media (max-width: 992px) {
    width: 300px;
    height: 300px;
  }

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
    margin-bottom: 20px;
  }
`;

export const LeftText = styled.div`
  position: relative;
  animation: ${slideDownText} 1s ease-out;
  padding-left: 40px;

  @media (max-width: 768px) {
    padding-left: 0;
    padding-inline: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const RightText = styled.div`
  position: relative;
  animation: ${slideDownText} 1s ease-out;
  padding-right: 40px;

  @media (max-width: 768px) {
    padding-right: 0;
    padding-inline: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
