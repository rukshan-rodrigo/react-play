import React from "react";

export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="container">
          <div className="brand">Space Rookie</div>
          <h1>Discover Space missions</h1>
          <div className="jumpBtn">
            <a href="#">jump</a>
          </div>
        </div>
      </div>
    );
  }
}
