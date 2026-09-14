import React from "react";
import { greeting, socialMediaLinks, contactInfo } from "../../portfolio";
import PlatformBadges from "../../components/platformBadges/PlatformBadges";
import "./Hero.scss";

export default function Hero() {
  return (
    <header className="hero wrap">
      <div className="hero__eyebrow">{greeting.title}</div>
      <h1 className="serif">{greeting.headline}</h1>
      <p className="hero__lede">{greeting.summary}</p>
      <div className="hero__ctas">
        <a className="btn btn--primary" href="#contact">
          Contact me
        </a>
        <a
          className="btn btn--ghost"
          href={greeting.resumeLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          See my résumé
        </a>
      </div>
      <PlatformBadges variant="honor" caption="Independently vetted as top talent by" />
      <div className="hero__meta">
        <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
        <a href={socialMediaLinks.github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href={socialMediaLinks.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <span>{greeting.location}</span>
      </div>
    </header>
  );
}
