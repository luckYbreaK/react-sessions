import React from "react";
import axios from "axios";

export default class Dashboard extends React.Component {
  handleClick() {
    axios.get("/loggedIn/admin").then(response => {
      console.log(response);
    });
  }

  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <button onClick={() => this.handleClick()}>
          Go to Admin Page (Only Admins)
        </button>
        <button>Go to Student Page</button>
      </div>
    );
  }
}
