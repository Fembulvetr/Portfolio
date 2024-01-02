import React, { useState } from "react";
import Head from "next/head";
// components
import Nav from "../components/nav";
import { experience } from "../constants";
// styles
import { Layout } from "../styles/layout.styled";
import * as Styled from "../styles/experience.styled";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";

const Experience = () => {
  const [currentExperience, setCurrentExperience] = useState(0);

  const handleNextExperience = () => {
    setCurrentExperience((prev) => (prev + 1) % experience.length);
  };

  const handlePrevExperience = () => {
    setCurrentExperience((prev) => (prev - 1 + experience.length) % experience.length);
  };

  return (
    <>
      <Head>
        <title>Experience</title>
        <link key="icon" rel="icon" href="/icon.png" />
      </Head>
      <Layout>
        <Nav />
        <Styled.ExperienceWrapper>
          <Styled.Title>
            Work <span>Experience</span>
          </Styled.Title>
          {experience.map((experience, index) => (
            <Styled.Experience key={index} active={index === currentExperience}>
              <Styled.TopBlock>
                <Styled.ExperienceName>{experience.companyName}</Styled.ExperienceName>
                <Styled.ExperiencePeriod>{experience.period}</Styled.ExperiencePeriod>
              </Styled.TopBlock>
              <Styled.ExperienceRole>{experience.role}</Styled.ExperienceRole>
              <Styled.DescWrapper>
                <div>
                  <Styled.DescTitle>Description</Styled.DescTitle>
                  <Styled.ExperienceDescription>{experience.description}</Styled.ExperienceDescription>
                </div>
                <Styled.Divider />
                <div>
                  <Styled.DescTitle>Stack</Styled.DescTitle>
                  <Styled.ExperienceStack>
                    {experience.stack.map((item, index) => (
                      <span key={index}> · {item}</span>
                    ))}
                  </Styled.ExperienceStack>
                </div>
              </Styled.DescWrapper>
            </Styled.Experience>
          ))}
          <Styled.ButtonsWrapper>
            <Styled.Button onClick={handlePrevExperience}>
              <ArrowLeftOutlined style={{ color: "#fff", fontSize: "24px", marginRight: "-5px" }} />
              <Styled.Arrow />
            </Styled.Button>
            <Styled.Button onClick={handleNextExperience}>
              <Styled.Arrow />
              <ArrowRightOutlined style={{ color: "#fff", fontSize: "24px", marginLeft: "-5px" }} />
            </Styled.Button>
          </Styled.ButtonsWrapper>
        </Styled.ExperienceWrapper>
      </Layout>
    </>
  );
};

export default Experience;
