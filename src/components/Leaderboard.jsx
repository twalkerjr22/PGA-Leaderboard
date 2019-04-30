import React, { Component } from "react";
import Header from "./header";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";
import TableToolbar from "./tabletoolbar";
import LeaderboardTable from "./LeaderboardTable";
import Modal from "@material-ui/core/Modal";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

const styles = {
  root: {
    flexGrow: 1,
    alignItems: "center"
  },
  paper: {
    height: "100%",
    width: "80%",
    padding: "50px",
    margin: "0 auto",
    marginTop: "30px"
  },
  modalPaper: {
    flexGrow: 1,
    position: "absolute",
    width: "30%",
    left: "60%",
    top: "20%",
    marginLeft: "-320px",
    marginRight: "-150px",
    backgroundColor: "white",
    textAlign: "center",
    padding: "20px",
    outline: "none"
  },
  button: {
    backgroundColor: "#003c80",
    color: "white"
  }
};

class Leaderboard extends Component {
  state = { open: false };
  constructor(props) {
    super(props);
    console.log(props);
  }

  
  openAdd = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  edit = id => {
    this.setState({ open: true });
    this.setState({ editing: true });
    this.setState({ firstName: this.props.leaderboardData[id - 1].firstName });
    this.setState({ lastName: this.props.leaderboardData[id - 1].lastName });
    this.setState({ score: this.props.leaderboardData[id - 1].score });
    this.setState({ id: id });
  };
  addNewPerson = () => {
    if (!this.state.editing) {
      this.props.add(
        this.state.firstName,
        this.state.lastName,
        this.state.score
      );
      this.handleClose();
      this.setState({ firstName: "" });
      this.setState({ lastName: "" });
      this.setState({ score: "" });
    } else {
      this.props.update(
        this.state.firstName,
        this.state.lastName,
        this.state.score,
        this.state.id
      );
      this.handleClose();
      this.setState({ firstName: "" });
      this.setState({ lastName: "" });
      this.setState({ score: "" });
    }
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <Header />
        <Paper style={styles.paper}>
          <Grid style={styles.root} container spacing={24}>
            <Grid item xs={12}>
              <TableToolbar openAdd={this.openAdd} />
            </Grid>
            <Grid item xs={12}>
              <LeaderboardTable
                data={this.props.leaderboardData}
                delete={this.props.delete}
                edit={this.edit}
              />
            </Grid>
          </Grid>
        </Paper>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <Paper style={styles.modalPaper}>
            <Typography component="h2" variant="h5">
              Add New Player
            </Typography>
            <form noValidate autoComplete="off">
              <TextField
                id="firstName"
                label="First Name"
                margin="normal"
                onChange={this.handleChange}
                variant="outlined"
                value={this.state.firstName}
                name="firstName"
              />
              <TextField
                id="lastName"
                label="Last Name"
                margin="normal"
                name="lastName"
                onChange={this.handleChange}
                variant="outlined"
                value={this.state.lastName}
              />
              <TextField
                id="score"
                label="Score"
                type="number"
                margin="normal"
                onChange={this.handleChange}
                variant="outlined"
                name="score"
                value={this.state.score}
              />
            </form>
            <Button
              style={styles.button}
              onClick={this.addNewPerson}
              variant="contained"
              type="submit"
            >
              Submit
            </Button>
          </Paper>
        </Modal>
      </div>
    );
  }
}

export default Leaderboard;
