import { Component } from "react";
import './Main.css';

class Contact extends Component {

    render() {
        return(
            <main className="contact">
                <h1>Contact
                </h1>
                <div className="contact-body">
                    <h3>Email</h3>
                    <ul className="contact-info">
                        <li>jran2400@gmail.com</li>
                    </ul>
                    <h3>Phone</h3>
                    <ul className="contact-info">
                        <li>(724)980-7831</li>
                    </ul>
                </div>
            </main>
        )
    }
}

export default Contact;