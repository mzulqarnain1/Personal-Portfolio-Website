import React from "react";
import { stats } from "../../portfolio";
import "./StatBand.scss";

export default function StatBand() {
  return (
    <div className="stat-band">
      <div className="wrap">
        {stats.map(stat => (
          <div key={stat.label}>
            <div className="num serif">{stat.value}</div>
            <div className="lbl">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
