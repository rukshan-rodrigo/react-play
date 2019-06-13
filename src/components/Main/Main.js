import React from "react";
import axios from "axios";
import Filters from "../Filters";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flights: []
    };
  }

  componentDidMount() {
    axios
      .get("https://api.spacexdata.com/v2/launches")
      .then(response => {
        this.setState({
          flights: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const flights_arr = this.state.flights;
    console.log(flights_arr);

    const listItems = flights_arr.map(flight => (
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

    return (
      <div className="main ">
        <div className="container">
          <div className="filters">
            <Filters />
          </div>
          <div className="results">{listItems}</div>
        </div>
      </div>
    );
  }
}
