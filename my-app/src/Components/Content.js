import React, {Component} from 'react'
import './Content.css'
import data from '../data'

export default class Content extends Component {
    constructor(props) {
        super(props);

        this.state = {
            index: 0,
        }
    }

    handlePrevious() {
        if(this.state.index > 0) {
            this.setState({index: this.state.index - 1})
        } else {
            this.setState({index: 24})
        }
    }

    handleNext(){
        if(this.state.index < 24) {
            this.setState({index: this.state.index + 1})
        } else {
            this.setState({index: 0})
        }
    }


    render() {
        return(
        <div className="main-main">
                <div className="background-div">
                    <div className="main-div">
                        <div className="count">
                            <div>{`${this.state.index + 1}/25`}</div>
                        </div>
                        <div className="data-info">
                            <div className="name">{data[this.state.index].name.first} {data[this.state.index].name.last}</div>
                            <div className="basic-info">
                                <div className="from"><p>From: &nbsp;</p>{data[this.state.index].city}, {data[this.state.index].country}</div>
                                <div className="employer"><p>Job Title: &nbsp;</p>{data[this.state.index].title}</div>
                                <div className="title"><p>Employer: &nbsp;</p>{data[this.state.index].employer}</div>
                            </div> 
                            <h2>Favorite Movies:</h2>
                            <div className="movies">
                                <li>1. &nbsp;{data[this.state.index].favoriteMovies[0]}</li>
                                <li>2. &nbsp;{data[this.state.index].favoriteMovies[1]}</li>
                                <li>3. &nbsp;{data[this.state.index].favoriteMovies[2]}</li>
                            </div>
                        </div>
                    </div>
                </div>
                <footer>
                <ul>
                    <button className="previous-btn" onClick = {() => this.handlePrevious()}>&lt;&nbsp;Previous</button>
                        <div className="threeBtns">
                            <li>Edit</li>
                            <li>Delete</li>
                            <li>New</li>
                        </div>
                    <button className="next-btn" onClick  = {() => this.handleNext()}>Next > </button>
                </ul>
            </footer>
        </div>
        )
    }
}