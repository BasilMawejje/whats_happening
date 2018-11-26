import React, { Component } from "react";
import "./App.css";
import News from "./News/News";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news1: {
        type: "top-headlines",
        query: "sources=bbc-news"
      },
      news2: {
        type: "everytop-headlinesthing",
        query: "country=us&category=business"
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
      }
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">What's Happening</h1>
        </header>
        <News news={this.state.news1} />
        <News news={this.state.news2} />
        <News news={this.state.news3} />
        <News news={this.state.news4} />
        <News news={this.state.news5} />
      </div>
    );
  }
}

export default App;
