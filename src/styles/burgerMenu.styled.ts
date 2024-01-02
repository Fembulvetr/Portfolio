import styled from "styled-components";

export const Wrapper = styled.div``;

export const Button = styled.div`
  position: fixed;
  top: 2%;
  right: 2%;
  z-index: 36;
`;

export const List = styled.div`
  display: block;
  height: 100vh;
  width: 100%;
  position: absolute;
  right: 0;
  top: 0;
  transition: transform 0.3s ease-in;
  padding-top: 60px;
  background-color: #272727;
  z-index: 35;

  &.open {
    transform: translateX(0);
  }
  &.hide {
    transform: translateX(100%);
  }
`;

export const Row = styled.div`
  border-collapse: separate;
  border-bottom: 1px solid white;
  padding: 15px 0 5px 2%;
  font-size: 1.2em;
  color: #ECE6DB;
  text-transform: uppercase;
`;
