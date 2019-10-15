import React, {Component} from 'react'
import './Footer.css'

export default class Footer extends Component {
    render() {
        return(
            <footer>
                <ul>
                    <button className="previous-btn">Previous</button>
                    <li>Edit</li>
                    <li>Delete</li>
                    <li>New</li>
                    <button className="next-btn">Next</button>
                </ul>
            </footer>
        )
    }
}