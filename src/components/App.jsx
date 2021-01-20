import React from "react";
import Nav from "./Nav";
import Intro from "./IntroSection";
import Skills from "./Skills";
import Projects from './Projects';
export default class App extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <Intro/>
        <Skills/>
        <Projects/>
      </div>
    );
  }
}
