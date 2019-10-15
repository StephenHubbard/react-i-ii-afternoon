import React, { Component } from "react";
import "./App.css";
import Header from './Components/Header'
import Content from './Components/Content'
// import Footer from './Components/Footer'


class App extends Component {
  constructor() {
    super();

    this.state = {
      index: ''
    };
  }



  render() {
    return (
      <div className="App">
          <Header />
          <Content />
          {/* <Footer /> */}
      </div>
    );
  }
}

export default App;