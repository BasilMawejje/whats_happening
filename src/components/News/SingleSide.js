import React from "react";

const SingleSide = ({ item }) => (
  <div>
    <div className="divider" />
    <div className="section">
      <h5>{item.source.name}</h5>
      <a href={item.url} target="_blank">
        <p>{item.title}</p>
      </a>
    </div>
  </div>
);

export default SingleSide;
