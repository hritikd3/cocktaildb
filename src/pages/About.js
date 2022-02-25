import React from "react";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <>
      <section className="section about-section">
        <h1 className="section-title">
          About us
          <p>
            {" "}
            <br></br>
            Welcome to TheCocktailDB. An open, crowd-sourced database of drinks
            and cocktails from around the world.{" "}
          </p>
        </h1>
      </section>
    </>
  );
};

export default About;
