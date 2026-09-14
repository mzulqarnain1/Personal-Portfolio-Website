import React from "react";
import { workExperiences } from "../../portfolio";
import "./Experience.scss";

export default function Experience() {
  return (
    <section className="wrap">
      <div className="sec-head">
        <h2>Experience</h2>
        <p>Four roles, one thread — systems that hold up under real load, backend to frontend.</p>
      </div>
      {workExperiences.experience.map(job => (
        <div className="titem" key={job.company + job.date}>
          <div className="titem__top">
            <span className="titem__role">
              {job.role} · <span className="titem__co">{job.company}</span>
            </span>
            <span className="titem__date mono">{job.date}</span>
          </div>
          <p className="titem__desc">{job.desc}</p>
          <ul>
            {job.bullets.map((bullet, i) => (
              <li key={i}>{bullet}</li>
            ))}
          </ul>
          <div className="stackline">
            {job.stack.map(tech => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
