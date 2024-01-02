import React, { useState, useRef, ChangeEvent, FormEvent, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
// components
import Nav from "../components/nav";
import emailjs from "@emailjs/browser";
// styles
import { Layout } from "../styles/layout.styled";
import * as Styled from "../styles/contact.styled";
import {
  LoadingOutlined,
  CloseOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  GithubOutlined,
  MailOutlined,
  SendOutlined,
} from "@ant-design/icons";

//------------------------------------------------------------------

const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setError("Please fill in all the fields.");
      return;
    }

    setLoading(true);

    emailjs
      .send(
        "service_lk1929z",
        "template_y4os879",
        {
          from_name: form.name,
          to_name: "Matvii",
          from_email: form.email,
          to_email: "ivanovmatvei@ukr.net",
          message: form.message,
        },
        "XhcFsvfU9hNPT8AnR"
      )
      .then(
        () => {
          setLoading(false);
          setError(null);
          setSuccess("Message sent, thank you!");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          setError("Ahh, something went wrong. Please try again.");
        }
      );
  };

  const onClose = () => {
    setError(null);
    setSuccess(null);
  };

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (error || success) {
      timeoutId = setTimeout(() => {
        setError(null);
        setSuccess(null);
      }, 5000);
    }

    return () => clearTimeout(timeoutId);
  }, [error, success]);

  return (
    <>
     <Head>
        <title>Contact</title>
        <link key="icon" rel="icon" href="/icon.png" />
      </Head>
    <Layout>
      <Nav />
      {(error || success) && (
        <Styled.Error className={success ? "success" : error ? "error" : ""}>
          {error ? error : success ? success : ""}
          <CloseOutlined onClick={onClose} />
          <div />
        </Styled.Error>
      )}
      <Styled.ContactWrapper>
        <Styled.Form ref={formRef} onSubmit={handleSubmit}>
          <Styled.Title>
            Contact <span>Me!</span>
          </Styled.Title>
          <Styled.Field
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            gridArea="name"
          />
          <Styled.Field
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            gridArea="email"
          />
          <Styled.Textarea
            name="message"
            rows={8}
            cols={10}
            wrap="soft"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            gridArea="message"
          />
          <Styled.FormFooter>
            <Styled.Button disabled={loading} type="submit">
              {loading ? <LoadingOutlined /> : <p> Send Message </p>}
            </Styled.Button>
            <Styled.Social>
              <Link href="https://www.linkedin.com/in/matvii-ivanov-47b589250" target="_blank">
                <LinkedinOutlined style={{ fontSize: "100%", color: "#fff" }} />
              </Link>
              <Link href="https://www.instagram.com/matveich.inc" target="_blank">
                <InstagramOutlined style={{ fontSize: "100%", color: "#fff" }} />
              </Link>
              <Link href="https://github.com/Fembulvetr" target="_blank">
                <GithubOutlined style={{ fontSize: "100%", color: "#fff" }} />
              </Link>
              <Link href="mailto:ivanovmatvei@ukr.net">
                <MailOutlined style={{ fontSize: "100%", color: "#fff" }} />
              </Link>
              <Link href="https://t.me/matveichInc" target="_blank">
                <SendOutlined
                  style={{ fontSize: "90%", color: "#fff", transform: "rotate(-45deg)", marginTop: "0px" }}
                />
              </Link>
            </Styled.Social>
          </Styled.FormFooter>
        </Styled.Form>
      </Styled.ContactWrapper>
    </Layout>
    </>
  );
};

export default Contact;
