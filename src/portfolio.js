/* Site content. Sourced from the latest resume — edit here to update the site. */

const greeting = {
  name: "M. Zulqarnain",
  title: "Senior Software & Applied AI Engineer",
  location: "Lahore, Pakistan",
  headline:
    "Ten years full-stack, backend at the core, five industries, one habit: own the whole build.",
  summary:
    "Senior full-stack engineer with nearly 10 years of experience across Python/Django/FastAPI backends and React frontends — I gravitate toward the backend, but I own a stack end to end when the job calls for it. I've maintained infrastructure across 140+ microservices for a platform serving 40M+ learners, built data pipelines and enrichment systems covering 500,000+ companies and 2M+ founders, and have hands-on experience building agentic AI systems, RAG pipelines, and LLM-powered workflows using OpenAI and Claude, from design through production.",
  resumeLink:
    "https://docs.google.com/document/d/1yU6obaAtZmotQwO8ZJmjApOCeSW0-ck0/"
};

const socialMediaLinks = {
  github: "https://github.com/mzulqarnain1",
  linkedin: "https://www.linkedin.com/in/mzulqarnain1/",
  gmail: "zulqarnain.mailbox@gmail.com"
};

const stats = [
  { value: "10 yrs", label: "in production systems" },
  { value: "500k+", label: "companies covered by my pipelines" },
  { value: "2M+", label: "founders profiled and enriched" },
  { value: "40M+", label: "learners on edX infrastructure" }
];

const workExperiences = {
  experience: [
    {
      role: "Senior Data & Software Engineer",
      company: "Basis Set Ventures",
      date: "May 2022 – Mar 2026",
      desc: "Part of a 3-person engineering team designing, developing, and maintaining the firm's core investment platform — full stack, from backend services to the data infrastructure underneath.",
      bullets: [
        "Pushed for moving our main product, Pascal, off Django templates onto FastAPI and React, and ended up leading that rebuild on both the backend and the frontend.",
        "Built and maintained the pipelines that pull in new companies and startups daily — profiles, GitHub activity, founder backgrounds, education history — feeding a database that's grown to 500k+ companies.",
        "Built the founder-enrichment pipeline mostly on my own: LinkedIn and Google search scraping, verification steps, PhantomBuster, logging at each stage. It covers 2M+ founders now.",
        "Added a module that tracks follower counts and activity for every company in the database across GitHub, Product Hunt, YCombinator, Discord, and Twitter.",
        "Replaced the old form-based search with full-text search, so investors can just type what they're looking for instead of filling out fields to find companies and founders.",
        "Built a portfolio-tracking app with an API layer tying investor activity back to companies in the database, plus some Apps Script automation for the email reports that come out of it.",
        "Added LLM-based automation — agentic workflows and RAG pipelines with OpenAI and Claude — to help with business-case evaluation and data filtering/categorization."
      ],
      stack: [
        "Python", "Django", "FastAPI", "PostgreSQL", "AWS", "Docker",
        "Apache Airflow", "Argo Workflows", "Next.js", "MCP", "Vector Databases", "Agentic AI Workflows"
      ]
    },
    {
      role: "Senior Software Engineer",
      company: "Stack Builders",
      date: "Oct 2021 – Apr 2022",
      desc: "Backend team at FindKeepLove, a platform fashion and lifestyle brands use to run sweepstakes campaigns.",
      bullets: [
        "Shipped new features and fixed production issues, mostly on the Flask backend but touching the React frontend too when needed.",
        "Built a recurring-payment and subscription-billing service from scratch, including retry logic and alerts for failed transactions."
      ],
      stack: ["Python", "Flask", "ReactJS", "MariaDB", "Celery", "Redis", "Docker", "CircleCI"]
    },
    {
      role: "Senior Software Engineer",
      company: "Arbisoft",
      date: "Jan 2018 – Nov 2021",
      desc: "Two clients — edX and Wanderu — spanning infrastructure work and travel-provider integrations.",
      bullets: [
        "Worked closely with an edX engineering manager keeping infrastructure healthy across 140+ microservices — dependency upgrades, CI/CD changes, deprecations, security patches — on a platform where stability mattered a lot given the scale.",
        "Was the go-to person for the infrastructure layer across those services — reliable deployments, and staying ahead of risk from dependency changes in a large distributed system.",
        "Built and maintained 30+ ground and rail travel-provider integrations for Wanderu — FlixBus, Trenitalia, RailEasy, and others — covering thousands of stations, plus a fair amount of geolocation and maps API work along the way.",
        "Handled the full integration for Trenitalia, RailEasy, and a few other providers, from search and booking through credit-card payment processing."
      ],
      stack: ["Python", "Django", "ReactJS", "PostgreSQL", "MongoDB", "AWS", "Kubernetes", "Jenkins", "GoCD"]
    },
    {
      role: "Software Engineer",
      company: "QC Technologies",
      date: "Nov 2016 – Jan 2018",
      desc: "Full-stack developer on Vital Interaction, an automated patient-communication platform serving healthcare organizations across the US.",
      bullets: [
        "Onboarded hundreds of US medical facilities onto the appointment-automation portal, using two-way SMS, email, and IVR workflows.",
        "Shipped web features and backend services that supported the mobile apps, and was involved in planning, architecture, and direct client conversations along the way."
      ],
      stack: ["Python", "Django", "MySQL", "jQuery"]
    }
  ]
};

const skillGroups = [
  { category: "Backend", items: ["Python", "Django", "FastAPI", "Flask"] },
  { category: "Frontend", items: ["JavaScript", "TypeScript", "ReactJS", "Next.js"] },
  { category: "AI / LLM", items: ["OpenAI API", "Claude MCP", "Claude Skills", "Prompt engineering", "AI pipeline design"] },
  { category: "Data / ETL", items: ["Apache Airflow", "Celery", "Redis", "Selenium", "PostgreSQL", "MongoDB", "MySQL"] },
  { category: "Cloud / Infra", items: ["AWS (EC2, S3, RDS, Lambda)", "Docker", "Kubernetes", "Jenkins", "GoCD", "GitHub Actions"] },
  { category: "Other", items: ["RESTful & GraphQL APIs", "SQLAlchemy", "System design", "Agile / Scrum"] }
];

const selectedWork = {
  title: "Selected work",
  subtitle: "A closer look at what I built and owned at each company.",
  projects: [
    {
      name: "Basis Set Ventures",
      desc: "Rewrote the firm's core platform and built the founder-enrichment pipeline behind a 500,000+ company, 2M+ founder database.",
      url: "https://www.basisset.ventures/"
    },
    {
      name: "edX",
      desc: "Kept infrastructure healthy across 140+ microservices for a platform reaching 40M+ learners worldwide.",
      url: "https://www.edx.org/"
    },
    {
      name: "Wanderu",
      desc: "30+ travel-provider integrations, thousands of stations, full booking and payment flows.",
      url: "https://wanderu.com/"
    },
    {
      name: "FindKeepLove",
      desc: "Built the recurring-payment and subscription-billing service from scratch, with retry logic and alerting.",
      url: "https://www.findkeep.love/"
    },
    {
      name: "Vital Interaction",
      desc: "Onboarded hundreds of US medical facilities onto an automated patient-communication portal.",
      url: "https://vitalinteraction.com/"
    },
    {
      name: "Tasseled",
      desc: "Built a GraphQL API sitting between the frontend and an ArangoDB graph database, plus new REST endpoints.",
      url: "https://tasseled.com/"
    }
  ]
};

const education = [
  {
    name: "BS Software Engineering",
    sub: "Punjab University College of Information Technology (PUCIT), Lahore · CGPA 3.24",
    when: "Oct 2012 – Jun 2016"
  }
];

const certifications = [
  { name: "AWS Cloud Developer Nanodegree", sub: "Udacity" },
  { name: "React Nanodegree", sub: "Udacity" }
];

const contactInfo = {
  headline: "Have a full-stack or AI problem worth solving properly?",
  email: "zulqarnain.mailbox@gmail.com",
  phone: "+92 331 7431748"
};

export {
  greeting,
  socialMediaLinks,
  stats,
  workExperiences,
  skillGroups,
  selectedWork,
  education,
  certifications,
  contactInfo
};
