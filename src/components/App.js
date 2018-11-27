import React, { Component } from "react";
import "./App.css";
import News from "./News/News";
import Sidenews from "./News/Sidenews";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news1: {
        type: "top-headlines",
        query: "sources=bbc-news"
      },
      news2: {
        type: "everything",
        query: "domains=wsj.com"
      },
      news3: {
        type: "top-headlines",
        query: "q=trump"
      },
      news4: {
        type: "everything",
        query: "q=bitcoin"
      },
      news5: {
        type: "everything",
        query: "q=apple&from=2018-11-25&to=2018-11-25&sortBy=popularity"
      },
      news6: {
        type: "top-headlines",
        query: "country=us&category=business"
      }
    };
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
            <News news={this.state.news1} />
            <hr />
            <h3>Business</h3>
            <News news={this.state.news2} />
            <hr />
            <h3>Trump</h3>
            <News news={this.state.news3} />
            <hr />
            <h3>Bitcoin</h3>
            <News news={this.state.news4} />
            <hr />
            <h3>Apple</h3>
            <News news={this.state.news5} />
            <hr />
          </div>

          <div className="col s3">
            <Sidenews news={this.state.news6} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
