import React from "react";
import { skillGroups } from "../../portfolio";
import "./Skills.scss";

export default function Skills() {
  return (
    <section className="wrap">
      <div className="sec-head">
        <h2>What I work with</h2>
      </div>
      <div className="skills-grid">
        {skillGroups.map(group => (
          <div className="skill-group" key={group.category}>
            <h3>{group.category.toUpperCase()}</h3>
            <p>{group.items.join(", ")}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
