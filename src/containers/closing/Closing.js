import React from "react";
import { contactInfo, socialMediaLinks } from "../../portfolio";
import PlatformBadges from "../../components/platformBadges/PlatformBadges";
import "./Closing.scss";

export default function Closing() {
  return (
    <div className="closing" id="contact">
      <div className="wrap">
        <div className="closing__eyebrow">Get in touch</div>
        <h2>{contactInfo.headline}</h2>
        <p>My inbox is open — {contactInfo.email}</p>
        <div className="links">
          <a className="btn btn--primary" href={`mailto:${contactInfo.email}`}>
            Email me
          </a>
          <a
            className="btn btn--ghost"
            href={socialMediaLinks.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            className="btn btn--ghost"
            href={socialMediaLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
        <div className="closing__platforms">
          <PlatformBadges variant="hire" caption="Prefer to hire through a platform?" />
        </div>
      </div>
    </div>
  );
}
