import React from "react";
import { greeting } from "../../portfolio";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="site-foot">
      {greeting.name} — {greeting.title}
    </footer>
  );
}
