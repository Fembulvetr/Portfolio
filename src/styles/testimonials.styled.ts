import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  width: 100%;
  height: 90%;
  align-items: center;

  @media (max-width: 768px) {
    height: 100vh;
    align-items: start;
  }
`;

export const Items = styled.div`
  width: 100%;
  padding-inline: 10%;

  @media (max-width: 992px) {
    padding-inline: 5%;
  }

  @media (max-width: 768px) {
    margin-top: 15%;
  }
`;

export const Item = styled.div`
  border: 1px solid #f5d393;
  border-radius: 30px;
  padding: 5px 15px 5px 8px;
  margin-bottom: 20px;
  cursor: pointer;

  &.active {
    padding: 20px 25px;
  }
`;

export const TestimonialHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const Name = styled.div`
  flex: 1;
  margin-left: 20px;
  font-size: 18px;

  @media (min-width: 1800px) {
    font-size: 24px;
  }

  @media (min-width: 2200px) {
    font-size: 28px;
  }
`;

export const Role = styled.div`
  @media (min-width: 1800px) {
    font-size: 22px;
  }

  @media (min-width: 2200px) {
    font-size: 26px;
  }
`;

export const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;

  @media (min-width: 1800px) {
    width: 60px;
    height: 60px;
  }

  @media (min-width: 2200px) {
    width: 80px;
    height: 80px;  }
`;

export const Message = styled.div`
  max-height: 0;
  overflow: hidden;
  font-size: 18px;
  line-height: 130%;

  h1 {
    font-size: 54px;
    margin: 0;
    margin-top: 40px;
    align-items: center;
    color: #f5d393;
  }

  &.active {
    animation: expand 1s linear forwards;
  }

  @keyframes expand {
    from {
      max-height: 0;
    }
    to {
      max-height: 100%;
    }
  }

  @media (min-width: 1800px) {
    font-size: 26px;

    h1 {
      font-size: 68px;
    }
  }

  @media (min-width: 2200px) {
    font-size: 32px;

    h1 {
      font-size: 86px;
    }
  }
`;
