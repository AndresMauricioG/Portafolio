import React from "react";
import Header from "../01-1-header/Header.jsx";
import Me from "../01-2-me/Me.jsx";
import Projects from "../01-3-projects/Projects.jsx";
import Contact from "../01-4-contact/Contact.jsx";
import Footer from "../01-5-footer/Footer.jsx";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Me></Me>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
