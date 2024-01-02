import React, { useState } from "react";
import Head from "next/head";
// components
import Nav from "../components/nav";
import { testimonials } from "../constants/index";
// styles
import { Layout } from "../styles/layout.styled";
import * as Styled from "../styles/testimonials.styled";

const Testimonials = () => {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const toggleExpand = (idx: number) => {
    setExpandedIndex((prevIndex) => (prevIndex === idx ? -1 : idx));
  };

  return (
    <>
      <Head>
        <title>Testimonials</title>
        <link key="icon" rel="icon" href="/icon.png" />
      </Head>
      <Layout>
        <Nav />
        <Styled.Wrapper>
          <Styled.Items>
            {testimonials.map((testimonial, idx) => (
              <Styled.Item
                key={idx}
                onClick={() => toggleExpand(idx)}
                className={expandedIndex === idx ? "active" : ""}
              >
                <Styled.TestimonialHeader>
                  <Styled.Avatar src={testimonial.avatar} alt="avatar" />
                  <Styled.Name>{testimonial.name}</Styled.Name>
                  <Styled.Role>{testimonial.role}</Styled.Role>
                </Styled.TestimonialHeader>
                <Styled.Message className={expandedIndex === idx ? "active" : ""}>
                  <h1>&lsquo;&lsquo;</h1>
                  {testimonial.message}
                </Styled.Message>
              </Styled.Item>
            ))}
          </Styled.Items>
        </Styled.Wrapper>
      </Layout>
    </>
  );
};

export default Testimonials;
