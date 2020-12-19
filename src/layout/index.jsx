import React from "react";
import { Helmet } from "react-helmet";
import config from "../../data/SiteConfig";
import "./index.css";

export default function MainLayout({ children }) {
  return (
    <>
      <Helmet>
        <meta name="description" content={config.siteDescription} />
        <html lang="en" />
      </Helmet>

      <section className="wrapper scroll">
        <a href="/">
          <figure>
            <img src="/logos/logo.svg" alt="Javascript Fashion" />
          </figure>
        </a>
        {children}
      </section>
    </>
  );
}
