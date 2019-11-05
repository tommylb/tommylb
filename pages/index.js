import React from "react";
import ContactForm from "../components/contactForm";
import Head from "../components/head";
import Hero from "../components/hero";
import Layout from "../containers/layout";

export default function Home(props) {
  return (
    <>
      <Head
        title="Hi, I'm Tommy Lunde Barvåg 👋"
        description="Hi, I'm Tommy Lunde Barvåg 👋 I’m a full stack developer. I’ve spent the last six years creating web solutions for great companies."
        jsonLdShowOrganization
      />
      <Layout>
        <Hero />
        <ContactForm />
      </Layout>
    </>
  );
}
