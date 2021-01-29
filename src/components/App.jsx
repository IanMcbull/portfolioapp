import React from "react";
import Nav from "./Nav";
import Intro from "./IntroSection";
import Skills from "./Skills";
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
export default class App extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <Intro/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
    );
  }
}
