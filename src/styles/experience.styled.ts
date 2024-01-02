import styled, { css, keyframes } from "styled-components";

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

//----------------------------------------------

export const ExperienceWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 95%;
  justify-content: center;

  @media (max-width: 992px) {
    height: auto;
    padding-top: 10%;
  }

  @media (max-width: 768px) {
   height: auto;
   padding-top: 0;
   justify-content: flex-start;
  }
`;

export const TopBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 5.5em;
  font-weight: 900;
  padding-bottom: 30px;
  margin-left: 150px;
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

  @media (max-width: 768px) {
    margin-top: 10%;
    margin-left: 5%;
  }

  @media (max-width: 500px) {
    font-size: 48px;
  }
`;

export const Experience = styled.div<{ active: boolean }>`
  display: none;
  position: relative;
  ${(props) => props.active && "display: block;"}
  margin: 0 130px;
  padding: 20px 40px;
  border: 1px solid #fff;
  border-radius: 20px;

  &:before {
    content: "";
    position: absolute;
    top: 10%;
    left: 18px;
    width: 4px;
    height: 0;
    background-color: #e6dedd;
    z-index: 1;
    animation: line 1s linear forwards;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  &:after {
    content: "";
    position: absolute;
    top: 8%;
    left: 12.5px;
    width: 15px;
    height: 15px;
    background-color: #e6dedd;
    border-radius: 50%;
    z-index: 2;
  }

  @keyframes line {
    to {
      height: 84%;
    }
  }

  @media (min-width: 1800px) {
    padding: 30px 50px;
  }

  @media (max-width: 992px) {
    margin: 0 40px;
    &::after,
    &::before {
      display: none;
    }
  }

  @media (max-width: 475px) {
    margin: 0 5%;
  }
`;

export const ExperienceName = styled.div`
  font-size: 2.2em;
  font-weight: 600;
  padding-bottom: 10px;
  letter-spacing: 2px;
  animation: ${slideDownText} 1s ease-out;

  @media (min-width: 1800px) {
    font-size: 3.2em;
  }

  @media (min-width: 2200px) {
    font-size: 4.2em;
  }

  @media (max-width: 700px) {
    font-size: 1.8em;
  }
`;

export const ExperiencePeriod = styled.div`
  font-size: 1.1em;
  font-weight: 400;
  color: #e6dedd;
  animation: ${slideDownText} 1s ease-out;

  @media (min-width: 1800px) {
    font-size: 2.1em;
  }

  @media (min-width: 2200px) {
    font-size: 3.1em;
  }

  @media (max-width: 700px) {
    font-size: 1em;
  }
`;

export const ExperienceRole = styled.div`
  font-size: 1.3em;
  color: #f5d393;
  animation: ${slideDownText} 1s ease-out;

  @media (min-width: 1800px) {
    font-size: 2.3em;
  }

  @media (min-width: 2200px) {
    font-size: 3.3em;
  }

  @media (max-width: 700px) {
    font-size: 1.1em;
  }
`;

export const DescWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 4fr 1fr 4fr;
  margin-top: 2em;
  backdrop-filter: blur(10px);
  animation: ${slideDownText} 1s ease-out;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

export const DescTitle = styled.div`
  font-size: 1.4em;
  border-bottom: 1px solid #fff;
  padding-bottom: 5px;
  margin-bottom: 10px;
  letter-spacing: 1.5px;

  @media (min-width: 1800px) {
    font-size: 2.4em;
  }

  @media (min-width: 2200px) {
    font-size: 3.4em;
  }
`;

export const Divider = styled.div`
  width: 2px;
  height: 100%;
  background-color: #f5d393;
  border-radius: 1px;
  margin: 0 auto;
`;
export const ExperienceDescription = styled.div`
  font-size: 1.2em;
  line-height: 130%;
  min-height: 250px;
  max-height: 250px;
  overflow: scroll;

  @media (min-width: 1800px) {
    font-size: 1.6em;
    max-height: 350px;
  }

  @media (min-width: 2200px) {
    font-size: 2.4em;
  }

  @media (max-width: 992px) {
    max-height: 500px;
  }

  @media (max-width: 768px) {
    max-height: 300px;
  }
`;
export const ExperienceStack = styled.div`
  font-size: 1.2em;
  line-height: 130%;
  min-height: 250px;
  max-height: 250px;
  overflow: scroll;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (min-width: 1800px) {
    font-size: 1.6em;
    max-height: 350px;
  }

  @media (min-width: 2200px) {
    font-size: 2.4em;
  }

  @media (max-width: 992px) {
    max-height: 500px;
  }

  @media (max-width: 768px) {
    max-height: 300px;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 130px 0;
  gap: 2%;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;
export const Button = styled.button`
  width: 40%;
  margin: 0 auto;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const Arrow = styled.div`
  width: 100%;
  height: 2px;
  background-color: #fff;

  @media (min-width: 1800px) {
    height: 3px;
  }
`;
