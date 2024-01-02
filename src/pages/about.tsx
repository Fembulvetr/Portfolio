import React, {useState, useEffect} from "react";
import Head from "next/head";
// components
import Nav from "../components/nav";
// styles
import { Layout } from "../styles/layout.styled";
import * as Styled from "../styles/about.styled";
import avatar from "../../public/Avatar.png";

//------------------------------------------------------------------------

const About = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <Layout className="about">
        <Nav />
        <Styled.AboutWrapper>
          {isMobile && (<Styled.Avatar src={avatar.src} alt="avatar" />)}
          <Styled.LeftText>
            <Styled.Text>
              Hi, I&apos;m Matvii Ivanov, a 20-year-old from Ukraine. I&apos;m a junior developer, and I love seeing
              real results and always learning to get better. I&apos;m really committed to doing good work and making
              sure it&apos;s the best quality it can be.
            </Styled.Text>
            <Styled.Divider />
            <Styled.Text>
              I am committed to ongoing learning and development, recognizing its essential role in making a meaningful
              contribution to the ever-evolving tech landscape. Embracing collaborative teamwork, I value the open
              exchange of ideas to collectively reach our objectives.
            </Styled.Text>
            {isMobile && (<Styled.Divider/>)}
          </Styled.LeftText>
          {!isMobile && (<Styled.Avatar src={avatar.src} alt="avatar" />)}
          <Styled.RightText>
            <Styled.Text>
              I bring hands-on experience with a range of technologies, including React, React Native, Expo CLI,
              Next.js, TypeScript, Redux, Redux-toolkit, Node.js, Express.js, MongoDB, Mongoose, React-Query, Formik,
              Rest APIs, async/await, Git, and more. This diverse skill set allows me to navigate the complex world of
              web and mobile development efficiently.
            </Styled.Text>
            <Styled.Divider />
            <Styled.Text>
              In addition to my technical skills, I find enthusiasm in refining processes to enhance efficiency and am
              dedicated to my ongoing self-improvement. My goal is to contribute to your company&apos;s success by
              promoting innovation and shared advancement.
            </Styled.Text>
            <Styled.Divider />
            <Styled.Text>
              Let&apos;s build the future together! Additionally, I have experience with design tools such as Canva and
              Figma, and I&apos;m familiar with UI libraries like Ant Design and MUI Material.{" "}
            </Styled.Text>
          </Styled.RightText>
        </Styled.AboutWrapper>
      </Layout>
    </>
  );
};

export default About;
