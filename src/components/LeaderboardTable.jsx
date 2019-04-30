import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import Button from "@material-ui/core/Button";

const styles = {
  table: {
    margin: "40px",
    marginTop: "10px",
    fontFamily: "Roboto"
  },
  deleteButton: {
    borderColor: "#F1373D"
  }
};

class LeaderboardTable extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.myProps = props;
  }
  render() {
    return (
      <ReactTable
        style={styles.table}
        defaultPageSize={15}
        defaultSorted={[
          {
            id: "lastName",
            desc: false
          },
          {
            id: "score",
            desc: false
          }
        ]}
        sortable
        defaultSortMethod={(a, b, desc) => {
          // force null and undefined to the bottom
          a = a === null || a === undefined ? -Infinity : a;
          b = b === null || b === undefined ? -Infinity : b;
          // force any string values to lowercase
          a = typeof a === "string" ? a.toLowerCase() : a;
          b = typeof b === "string" ? b.toLowerCase() : b;
          // Return either 1 or -1 to indicate a sort priority
          console.log(a);
          if (a > b) {
            return 1;
          }
          if (a < b) {
            return -1;
          }

          // returning 0 or undefined will use any subsequent column sorting methods or the row index as a tiebreaker
          return 0;
        }}
        className="-striped -highlight"
        data={this.props.data}
        columns={[
          {
            Header: "Lastname",
            accessor: "lastName",
            show: false
          },
          {
            Header: "Name",
            accessor: "name"
          },
          {
            Header: "Score",
            accessor: "score",
            Cell: props => <span className="number">{props.value}</span> // Custom cell components!
          },
          {
            Header: "Edit",
            accessor: "id",
            Cell: props => (
              <Button
                style={styles.button}
                onClick={() => {
                  this.myProps.edit(props.value);
                }}
                variant="outlined"
              >
                Edit
              </Button>
            ) // Custom cell components!
          },
          {
            Header: "Delete",
            accessor: "id",
            Cell: props => (
              <Button
                onClick={() => {
                  this.myProps.delete(props.value);
                }}
                color="secondary"
                variant="outlined"
              >
                Delete
              </Button>
            ) // Custom cell component to delete a row!
          }
        ]}
      />
    );
  }
}

export default LeaderboardTable;
