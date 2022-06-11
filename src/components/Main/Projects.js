import { Component } from "react";
import { ProjectItems } from "./ProjectItems";
import './Main.css';
import portrait from '../../images/portrait.png'

class Projects extends Component {

    render() {
        return(
            <main className="projects">
                <h1>Projects
                </h1>
                <div>
                    <ul className="project-grid">
                        {ProjectItems.map((item, index) => {
                            return (
                                <li key={index}>
                                    <a className={item.cName} href={item.url}>
                                        {item.title}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </main>
        )
    }
}

export default Projects;