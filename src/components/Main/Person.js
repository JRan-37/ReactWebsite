import { Component } from "react";
import { Social} from "./Social";
import './Main.css';
import portrait from '../../images/portrait.png'

class Person extends Component {

    render() {
        return(
            <main className="profile">
                <h4>Jonathan Randolph
                </h4>
                <div>
                    <img className="portrait-image" src={portrait}/>
                </div>
                <ul className="social-links">
                    {Social.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    <i className={item.title}>

                                    </i>
                                </a>
                            </li>
                        )
                    })}
                </ul>
                <div>
                    <h6>Summary</h6>
                    <p className="summary-block">Confident and eager worker looking for further opportunity to demonstrate a professional work
ethic. Able to leverage technical abilities and experience with outstanding teamwork and
communication skills to provide a valued contribution to any project or operation.
                    </p>
                </div>
            </main>
        )
    }
}

export default Person;