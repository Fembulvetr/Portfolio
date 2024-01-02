import styled from "styled-components";

export const ContactWrapper = styled.section`
  display: flex;
  width: 100%;
  height: 90%;
  align-items: center;
  justify-content: center;
  color: #fff;

  @media (max-width: 768px) {
    height: 100vh;
  }
`;

export const Title = styled.div`
  grid-area: title;
  font-size: 4em;
  font-weight: 900;
  padding-bottom: 40px;
  margin: 0 auto;
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

export const Form = styled.form`
  width: 60%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "title title"
    "name email"
    "message message"
    "button button";
  gap: 30px;

  @media (min-width: 1800px) {
    width: 80%;
  }

  @media (max-width: 768px) {
    width: 80%;
    grid-template-areas:
      "title title"
      "name name"
      "email email"
      "message message"
      "button button";
  }
`;

export const Field = styled.input<{ gridArea: string }>`
  width: 96.5%;
  padding: 8px;
  grid-area: ${(props) => props.gridArea || "auto"};
  background-color: transparent;
  border: none;
  border-bottom: 1.5px solid #f5d393;
  color: #fff;

  &:focus {
    outline: none;
    background: transparent;
  }

  &::placeholder {
    color: #f5d393;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    border: none;
    border-bottom: 1.5px solid #f5d393;
    -webkit-text-fill-color: #fff;
    background-clip: content-box;
    transition: background-color 0s 600000s, color 0s 600000s;
  }

  @media (min-width: 1800px) {
    font-size: 1.8em;
  }

  @media (min-width: 2200px) {
    font-size: 2.2em;
  }
`;

export const Textarea = styled.textarea<{ gridArea: string }>`
  width: 98%;
  padding: 8px;
  resize: none;
  grid-area: ${(props) => props.gridArea || "auto"};
  background-color: transparent;
  border-color: #f5d393;
  color: #fff;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #f5d393;
  }

  @media (min-width: 1800px) {
    font-size: 1.8em;
  }

  @media (min-width: 2200px) {
    font-size: 2.2em;
  }
`;

export const FormFooter = styled.div`
  grid-area: button;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.button`
  font-size: 1em;
  width: 30%;
  display: flex;
  justify-content: center;
  padding-block: 0.6em;
  padding-inline: 0.6em;
  position: relative;
  border: none;
  cursor: pointer;

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
    border: none;
  }

  &:hover:before {
    width: 40%;
  }

  p {
    text-decoration: none;
    color: #000;
    margin: 0;
    z-index: 10;
  }

  background-color: #fff;

  @media (min-width: 1800px) {
    font-size: 1.4em;
  }

  @media (min-width: 2200px) {
    font-size: 2em;
  }

  @media (max-width: 768px) {
    width: 45%;
  }
`;

export const Error = styled.div`
  position: absolute;
  color: #fff;
  right: 20px;
  top: 10px;
  padding: 15px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 5px;

  &.success {
    background-color: #14a44d;
  }

  &.error {
    background-color: #ef5350;
  }

  div {
    height: 4px;
    width: 100%;
    background-color: #fff;
    opacity: 0.5;
    position: absolute;
    bottom: 0;
    left: 0;
    border-bottom-left-radius: 5px;
    animation: shrink 5s linear forwards;
  }

  @keyframes shrink {
    to {
      width: 0;
    }
  }

  @media (max-width: 992px) {
    top: 8%;
  }
`;

export const Social = styled.div`
  display: flex;
  gap: 15px;

  a {
    font-size: 24px;
  }

  @media (min-width: 1800px) {
    a {
      font-size: 32px;
    }
  }
    @media (min-width: 2200px) {
      a {
        font-size: 42px;
      }
    }

    @media (max-width: 475px) {
      a {
        font-size: 18px;
      }
    }
`;
