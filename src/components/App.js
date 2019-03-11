import React, { Component } from "react";
import "./App.css";
import News from "./News/News";
import Sidenews from "./News/Sidenews";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="navbar-fixed">
          <nav>
            <div className="nav-wrapper blue-grey darken-1">
              <a href="/" className="brand-logo">
                WhatsHappening
              </a>
              <ul className="right hide-on-med-and-down">
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="row">
          <div className="col s12 m12 l9">
            <h3>Top Headlines</h3>
            <News news={this.state.news} />
            <hr />
          </div>

          <div className="col s3">
            <h3>Side News</h3>
            <Sidenews news={this.state.news} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
