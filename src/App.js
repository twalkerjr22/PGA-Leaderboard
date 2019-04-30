import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Leaderboard from "./components/Leaderboard";

class App extends Component {
  state = {
    data: []
  };
  handleDelete = id => {
    this.setState({
      data: this.state.data.filter(item => {
        return item.id != id;
      })
    });
  };

  handleUpdate = (firstName, lastName, score, id) => {
    this.state.data[id - 1].firstName = firstName;
    this.state.data[id - 1].lastName = lastName;
    this.state.data[id - 1].score = score;
    this.state.data[id - 1].name = lastName + "," + firstName;
  };
  handleAdd = (firstName, lastName, score) => {
    this.setState({
      data: [
        ...this.state.data,
        {
          id: this.state.data.length + 1,
          name: lastName + "," + firstName,
          firstName,
          lastName,
          score
        }
      ]
    });
  };
  render() {
    return (
      <div className="App">
        <Leaderboard
          leaderboardData={this.state.data}
          add={this.handleAdd}
          delete={this.handleDelete}
          update={this.handleUpdate}
        />
      </div>
    );
  }
}

export default App;
