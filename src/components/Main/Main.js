import React from "react";
import axios from "axios";
import Filters from "../Filters";
import Flights from "../Flights";

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
    return (
      <div className="main ">
        <div className="container">
          <div className="filters">
            <Filters />
          </div>
          <div className="results">
            <Flights flights={this.state.flights} />
          </div>
        </div>
      </div>
    );
  }
}
