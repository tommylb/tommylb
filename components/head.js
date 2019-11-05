import NextHead from "next/head";
import { withRouter } from "next/router";
import React from "react";

function Head(props) {
  const {
    title,
    description,
    jsonLdShowOrganization,
    router: { pathname }
  } = props;

  return (
    <NextHead>
      <title lang="en">{title}</title>
      <meta name="description" content={description}></meta>
      <link rel="canonical" href={pathname}></link>
      <meta property="og:title" content={title}></meta>
      <meta property="og:description" content={description}></meta>
      <meta property="og:url" content="/"></meta>
      <meta property="og:type" content="website"></meta>
      <meta property="og:image" content="https://tommylb.com/logo.jpg"></meta>
      <meta property="og:locale" content="en_US"></meta>
      <meta property="og:site_name" content="tommylb.com"></meta>
      {jsonLdShowOrganization && (
        <script type="application/ld+json">{`"@context": "https://schema.org",
        "@type": "Organization",
        "name": "Tommy Lunde Barvåg",
        "legalName": "Tommy Lunde Barvåg",
        "url": "https://tommylb.com/",
        "logo": "https://tommylb.com/logo.jpg",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Holtavegen 32",
            "addressLocality": "Rådal",
            "addressRegion": "Bergen",
            "postalCode": "5239",
            "addressCountry": "Norway"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "Sales and support",
            "telephone": "+47 97 77 79 07",
            "email": "tommy@barvaag.com"
        },
        "sameAs": ["https://www.facebook.com/tommybarvaag","https://www.linkedin.com/in/tommybarvaag/"]`}</script>
      )}
    </NextHead>
  );
}

export default withRouter(Head);
