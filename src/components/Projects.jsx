import './CountDown';
import { days,hours,
    minutes} from './CountDown';
const Projects = () => {    
    return (
    <div>
    <h5 className="text-center" id="projects-header">Projects</h5>
    <section className="w-100 container shadow-lg" id="projects">
      <div className="d-flex text-white justify-content-center p-3 flex-column">
          <h6 id="project_section_Header">Am currently redesigning my projects page</h6>
          <div id="time">
              <span id="days">{days}d </span>
              <span id="hours">{hours}h </span>
              <span id="min">{minutes}m </span>
              {/*<span id="sec">{seconds}s</span>*/}
          </div>
      </div>
    </section>
        </div>
    )
}
export default Projects;