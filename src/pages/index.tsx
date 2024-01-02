import React from "react";
import Head from "next/head";
import Link from "next/link";
// components
import Nav from "../components/nav";
import ParticlesContainer from "../components/particlesContainer";
// styles
import { Layout } from "../styles/layout.styled";
import * as Styled from "../styles/home.styled";

//------------------------------------------------------------------------

const Home = () => {
  return (
    <>
      <Head>
        <title>Matvii Ivanov</title>
      </Head>
      <Layout>
        <ParticlesContainer />
        <Nav />
        <Styled.HomeWrapper>
          <Styled.TextBlock>
            <Styled.Title>
              Hi! I&apos;m <span>Matvii</span>
            </Styled.Title>
            <Styled.Description>I develop user interfaces and web and mobile applications</Styled.Description>
            <Styled.Button>
              <Link href="about">
                <p>Read more</p>
              </Link>
            </Styled.Button>
          </Styled.TextBlock>
        </Styled.HomeWrapper>
      </Layout>
    </>
  );
};

export default Home;
