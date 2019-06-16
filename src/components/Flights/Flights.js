import React, { Component } from "react";

export default class Flights extends React.Component {
  render() {
    const { flights } = this.props;
    const listItems = flights.map(flight => (
      <div className="mission" key={flight.flight_number}>
        <div className="mission__patch">
          <img src={flight.links.mission_patch} alt={flight.mission_name} />
        </div>

        <div className="mission__details">
          <div className="mission__details_title">{flight.mission_name}</div>
          <div className="mission__details_sub">{flight.details}</div>
        </div>
        <div className="mission__flight">
          <div className="mission__flight_number">
            <span>Flight number</span>
            <span>#{flight.flight_number}</span>
          </div>
        </div>
      </div>
    ));

    return <div>{listItems}</div>;
  }
}
