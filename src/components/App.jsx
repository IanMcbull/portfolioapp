import React from "react";
import Nav from "./Nav";
import Intro from "./IntroSection";
export default class App extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <Intro/>
      </div>
    );
  }
}
