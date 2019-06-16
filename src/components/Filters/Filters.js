import React, { Component } from "react";

export default class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flightFilter: ""
    };
  }

  handleChange = e => {
    this.setState({
      flightFilter: e.target.value
    });
    this.props.onChange(e.target.value);
  };

  render() {
    return (
      <div className="filters__item">
        <label htmlFor="filter">Filter by keyword: </label>
        <input
          type="text"
          id="filter"
          value={this.state.flightFilter}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
