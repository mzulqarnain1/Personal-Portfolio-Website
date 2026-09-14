import React from "react";
import Hero from "./hero/Hero";
import StatBand from "../containers/statBand/StatBand";
import Experience from "./experience/Experience";
import Skills from "./skills/Skills";
import SelectedWork from "./selectedWork/SelectedWork";
import Education from "./education/Education";
import Closing from "./closing/Closing";
import Footer from "../components/footer/Footer";

export default function Main() {
  return (
    <div>
      <Hero />
      <StatBand />
      <Experience />
      <Skills />
      <SelectedWork />
      <Education />
      <Closing />
      <Footer />
    </div>
  );
}
