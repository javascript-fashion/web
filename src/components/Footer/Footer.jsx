import React from "react";
import { Link } from "gatsby";
import UserLinks from "../UserLinks/UserLinks";
import "./Footer.css";

function Footer({ config }) {
  const url = config.siteRss;
  const { copyright } = config;
  if (!copyright) {
    return null;
  }
  return (
    <footer className="footer">
      <UserLinks config={config} labeled />
      <div className="notice-container">
        <p>{copyright}</p>
        <br />
        <Link to={url}>
          <button type="button">Subscribe</button>
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
