import React, { Component } from "react";
import SingleSide from "./SingleSide";
import axios from "axios";

class Sidenews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidenews: []
    };
  }

  componentDidMount() {
    const url = `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=fac26990e8a943b8b37f3372e623188d`;

    axios
      .get(url)
      .then(response => {
        this.setState({
          sidenews: response.data.articles
        });
      })
      .catch(error => console.log(error));
  }

  renderItems() {
    return this.state.sidenews.map(item => (
      <SingleSide key={item.url} item={item} />
    ));
  }

  render() {
    return <div>{this.renderItems()}</div>;
  }
}

export default Sidenews;
