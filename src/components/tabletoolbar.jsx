import React, { Component } from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";

const styles = {
  root: {
    display: "inline",
    flexGrow: 1,
    width: "100%"
  },

  button: {
    float: "right",
    margin: "20px",
    marginBottom: "0px",
    marginLeft: "auto",
    backgroundColor: "#003c80",
    color: "white"
  }
};

class TableToolbar extends Component {
  state = {};
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return (
      <div style={styles.root}>
        <Button
          style={styles.button}
          onClick={this.props.openAdd}
          variant="contained"
          
        >
          Add
          <AddIcon />
        </Button>
      </div>
    );
  }
}

export default TableToolbar;
