import React from "react";
import Nav from "./Nav";
export default class App extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <div id="landing_page_1" className="container">
          <div className="d-flex">
            <div className="d-flex flex-column">
              <p className="display-3 content">
                Hi there!
                <br />
                My name is Ian.
              </p>
              <p className="header_text">
                I am a painter. Not the kind of painter you might be thinking
                of. I paint the internet.
                <br />
                Am a Web Designer based in Nairobi, Kenya with a keen eye for
                design and who enjoys solving complex design problems.
              </p>
            </div>
            <a href="#h" id="arrow_icon">
              <i className="lni lni-angle-double-right lni-32"></i>
            </a>
          </div>
        </div>
        <div id="landing_page_2"></div>
      </div>
    );
  }
}
