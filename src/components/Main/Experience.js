import { Component } from "react";
import './Main.css';
import portrait from '../../images/portrait.png'

class Experience extends Component {

    render() {
        return(
            <main className="experience">
                <h1>Experience
                </h1>
                <div>
                    <h3>Supremacy Links Software LLC</h3>
                    <ul className="summary-block">
                        <li>Developed game framework within the Unity Engine in C#</li>
                        <li>Established a quick and efficient workflow between the development team and graphic design teams to
properly create and implement assets within the Unity engine.
                        </li>
                        <li>Created and organized all business documents, expense reports, work contracts and project asset files.
                        </li>
                    </ul>
                    <h3>CIP-PL</h3>
                    <ul className="summary-block">
                        <li>Developed and deployed a user-friendly company website that allows visitors to quickly submit
information and request quotes.</li>
                        <li>Trained staff members on internal web functions, including steps on performing routine maintenance,
updates and minor website changes.
                        </li>
                        <li>Developed and maintained local networks in ways that optimize performance.
                        </li>
                    </ul>
                </div>
                <div>
                    <h3>Education</h3>
                        <ul className="summary-block">
                            <li>University of Pittsburgh, Computer Science</li>
                        </ul>
                </div>
            </main>
        )
    }
}

export default Experience;