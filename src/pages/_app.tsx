import React from "react";
import Head from "next/head";
import "../styles/global.css";
import { AppProps } from "next/app";

const Home = ({ Component, pageProps }: AppProps): JSX.Element => {
  return <Component {...pageProps} />;
};

export default Home;
