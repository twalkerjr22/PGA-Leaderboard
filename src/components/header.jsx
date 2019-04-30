import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const styles = {
  root: {
    backgroundColor: "#F1373D",
    color: "white"
  }
};
class Header extends Component {
  state = {};
  render() {
    return (
      <AppBar style={styles.root} position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            PGA Leaderboard
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
