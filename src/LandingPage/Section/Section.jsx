import React, { useState } from "react";
import CandidateList from "./CandidateList";
import "./Section.css";
import Footer from "./Footer";

const Section = () => {
  return (
    <div>
      <div className="sectionWrapper">
        <span className="heads">Pages </span>
        <span>/ Assignment</span>
      </div>
      <h3>Sales BDE</h3>
      <div className="ComponentWrapper">
        <div>
          <CandidateList />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Section;
