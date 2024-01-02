import styled from "styled-components";

export const Layout = styled.div`
  margin: 0;
  height: 100vh;
  background: radial-gradient(circle at center bottom, #168d8f -150%, #000 75%, #000 85%);

  &.about {
    background: radial-gradient(circle at right top, #168d8f -150%, #000 75%, #000 85%);
  }

  @media (max-width: 768px) {
    height: 100%;
  }
`;
