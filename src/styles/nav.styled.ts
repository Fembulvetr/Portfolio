import styled from "styled-components";

export const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  padding-top: 15px;
`;

export const NavItem = styled.div`
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  position: relative;
  font-weight: 500;
  font-size: 18px;

  &.active {
    color: #f5d393;

    &::after {
      position: absolute;
      left: 0;
      bottom: -1px;
      display: block;
      height: 1px;
      width: 100%;
      background-color: #f5d393;
      opacity: 1;
      transform: scaleX(1);
      transform-origin: left;
      transition: opacity 0.35s, transform 0.35s;
      content: "";
    }
  }

  &::after {
    position: absolute;
    left: 0;
    bottom: -1px;
    display: block;
    height: 1px;
    width: 100%;
    background-color: #f5d393;
    opacity: 0;
    transform: scaleX(0);
    transform-origin: left;
    transition: opacity 0.35s, transform 0.35s;
    content: "";
  }

  &:hover {
    color: #f5d393;
  }

  &:hover::after {
    opacity: 1;
    transform: scaleX(1);
  }

  @media (min-width: 1800px) {
    font-size: 24px;
  }

  @media (min-width: 2200px) {
    font-size: 32px;
  }
`;
