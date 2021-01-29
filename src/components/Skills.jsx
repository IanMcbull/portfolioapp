const Skills = () => {
    return (
        <div className="container mt-2 mb-3" id="skills">
            <h4 className="text-center">
        MY SKILLS
      </h4>
      <div className="text-center">
        <i className="fas fa-grip-lines fa-2x" style={{color: '#ffc107'}} data-aos="zoom-in"></i>
      </div>
      <div className="row">
      <div className="col-md-6 d-flex flex-column mr-0">
      <div id="html" className="p-2"><h6 data-aos="zoom-out" className="text-white">
        <i
          className="fab fa-html5 fa-3x mr-2"
          style={{color: 'rgb(218, 219, 216)'}}
        ></i
        >HTML
      </h6></div>
      <div id="javascript" className="p-2"><h6 data-aos="zoom-out">
        <i className="fab fa-js fa-3x mr-2" style={{color: '#1a1301'}}></i
        >Vanilla Javascript
      </h6></div>
      <div id="css" class="p-2"><h6 data-aos="zoom-in" style={{color: 'white'}}>
        <i className="fab fa-css3-alt fa-3x mr-2" style={{color:'rgb(253, 253, 253)'}}></i
        >CSS
      </h6></div>
      <div id="sass" className="p-2"><h6 data-aos="zoom-in">
        <i className="fab fa-sass fa-3x mr-2" style={{color: '#2e0307'}}></i
        >SASS
      </h6></div>
      <div id="bootstrap" className="p-2"> <h6 data-aos="zoom-in" className="text-white">
        <i className="fab fa-bootstrap fa-3x mr-2" style={{color: 'coral'}}></i>Bootstrap
      </h6></div>
      </div>
      <div className="col-md-6 d-flex flex-column">
        <div id="react" className="p-2"><h6 data-aos="zoom-out">
          <i className="fab fa-react fa-3x mr-2" style={{color: '#0dd63c'}}></i
          >React
        </h6></div>
        <div id="linux" className="p-2"><h6 data-aos="zoom-in">
          <i className="fab fa-linux fa-3x mr-2" style={{color: 'rgba(194, 35, 7, 0.651)'}}></i>Linux
        </h6></div>
        <div id="node" className="p-2"><h6 data-aos="zoom-in">
          <i className="fab fa-node fa-3x mr-2" style={{color: '#343a40'}}></i
          >NodeJs
        </h6></div>
        <div id="npm" className="p-2"><h6 data-aos="zoom-in" className="text-white">
          <i className="fab fa-npm fa-3x mr-2" style={{color: 'whitesmoke'}}></i>NPM
        </h6></div>
        <div id="git" className="p-2"><h6 data-aos="zoom-in">
          <i className="fab fa-git fa-3x mr-2"></i>Git
        </h6></div>
        </div>
    </div>
        </div>
    )
}
export default Skills;