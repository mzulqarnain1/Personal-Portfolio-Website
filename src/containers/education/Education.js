import React from "react";
import { education, certifications } from "../../portfolio";
import "./Education.scss";

export default function Education() {
  return (
    <section className="wrap">
      <div className="sec-head">
        <h2>Education &amp; certifications</h2>
      </div>
      {education.map(item => (
        <div className="ed-row" key={item.name}>
          <div>
            <div className="name">{item.name}</div>
            <div className="sub">{item.sub}</div>
          </div>
          <div className="when">{item.when}</div>
        </div>
      ))}
      {certifications.map(item => (
        <div className="ed-row" key={item.name}>
          <div>
            <div className="name">{item.name}</div>
            <div className="sub">{item.sub}</div>
          </div>
        </div>
      ))}
    </section>
  );
}
