import React from "react";
import "./PlatformBadges.scss";

const badges = [
  {
    name: "Toptal",
    label: "Top 3% Talent",
    href: "https://www.toptal.com/developers/resume/muhammad-zulqarnain#N4Y4jD",
    color: "#204ecf",
    icon: (
      <svg viewBox="0 0 60 17" xmlns="http://www.w3.org/2000/svg">
        <path
          d="m20.85 6.38 6.06-.89 2.72-5.49 2.71 5.49 6.06.89-4.39 4.28 1.04 6.03-5.42-2.85-5.43 2.85 1.04-6.03zm33.06 7.17 1.85-.27.82-1.67.83 1.67 1.84.27-1.33 1.31.31 1.83-1.65-.87-1.66.87.32-1.83zm-3.38-3.01-3.61-.52-1.61-3.26-1.62 3.26-3.6.52 2.6 2.55-.61 3.59 3.23-1.69 3.21 1.69-.61-3.59zm-45.19 3.01-1.85-.27-.82-1.67-.83 1.67-1.84.27 1.33 1.31-.31 1.83 1.65-.87 1.65.87-.31-1.83zm3.38-3.01 3.61-.52 1.61-3.26 1.61 3.26 3.61.52-2.6 2.55.61 3.59-3.23-1.69-3.22 1.69.62-3.59z"
          fill="currentColor"
        />
      </svg>
    )
  },
  {
    name: "Upwork",
    label: "Top Rated Plus",
    href: "https://www.upwork.com/freelancers/~01476fe8634c926d50",
    color: "#14a800",
    icon: (
      <svg viewBox="0 0 60 17" xmlns="http://www.w3.org/2000/svg">
        <polygon
          points="10,0 12.35,4.13 17,4.86 13.7,8.02 14.51,12.64 10,10.4 5.49,12.64 6.3,8.02 3,4.86 7.65,4.13"
          fill="currentColor"
        />
        <polygon
          points="30,0 32.35,4.13 37,4.86 33.7,8.02 34.51,12.64 30,10.4 25.49,12.64 26.3,8.02 23,4.86 27.65,4.13"
          fill="currentColor"
        />
        <polygon
          points="50,0 52.35,4.13 57,4.86 53.7,8.02 54.51,12.64 50,10.4 45.49,12.64 46.3,8.02 43,4.86 47.65,4.13"
          fill="currentColor"
        />
      </svg>
    )
  }
];

export default function PlatformBadges({ variant = "honor", caption }) {
  return (
    <div className={`platform-badges platform-badges--${variant}`}>
      {caption && <div className="platform-badges__caption">{caption}</div>}
      <div className="platform-badges__row">
        {badges.map(badge => (
          <a
            key={badge.name}
            className="platform-badge"
            href={badge.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{ "--badge-color": badge.color }}
          >
            <span className="platform-badge__icon">{badge.icon}</span>
            {variant === "hire" ? (
              <span className="platform-badge__text">
                <strong>Hire me on {badge.name}</strong>
                <span>{badge.label}</span>
              </span>
            ) : (
              <span className="platform-badge__text">
                <strong>{badge.label}</strong>
                <span>{badge.name}</span>
              </span>
            )}
          </a>
        ))}
      </div>
    </div>
  );
}
