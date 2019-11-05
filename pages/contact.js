import React from "react";
import ContactForm from "../components/contactForm";
import Head from "../components/head";
import Layout from "../containers/layout";

export default function Contact() {
  return (
    <>
      <Head title="Let’s have a chat" description="I’m always happy to talk about working together, new opportunities or just a friendly hello." />
      <Layout>
        <ContactForm />
      </Layout>
    </>
  );
}
