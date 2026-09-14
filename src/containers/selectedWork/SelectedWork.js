import React from "react";
import { selectedWork } from "../../portfolio";
import "./SelectedWork.scss";

export default function SelectedWork() {
  return (
    <section className="wrap">
      <div className="sec-head">
        <h2>{selectedWork.title}</h2>
        <p>{selectedWork.subtitle}</p>
      </div>
      <div className="work-grid">
        {selectedWork.projects.map(project => (
          <a
            className="work-card"
            key={project.name}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>{project.name}</h3>
            <p>{project.desc}</p>
            <span className="go">Visit site →</span>
          </a>
        ))}
      </div>
    </section>
  );
}
