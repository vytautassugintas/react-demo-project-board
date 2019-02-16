import React, { Component } from "react";
import { Button, Grid } from "semantic-ui-react";
import { connect } from "react-redux";
import {
  addColumn,
  addItemToColum,
  removeColumn,
  toggleColumnInput
} from "../../store/actions/board.actions";

import Column from "./Column/Column";

import "./Board.css";

class Board extends Component {
  constructor() {
    super();
    this.state = {
      cardTitle: ""
    };
  }

  addColumn = () => {
    this.props.dispatch(addColumn("random stuff"));
  };

  removeColumn = columnId => {
    this.props.dispatch(removeColumn(columnId));
  };

  addCard = (columnId, title) => {
    this.props.dispatch(addItemToColum({ columnId: columnId, text: title }));
    this.state.cardTitle = "";
  };

  toggleAddCardInput = columnId => {
    this.props.dispatch(toggleColumnInput(columnId));
  };

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const cols = this.props.board.map(column => <Column column={column} />);

    return (
      <div>
        <Grid columns={cols.length + 1} divided>
          {cols}
          <Grid.Column>
            <Button
              onClick={this.addColumn}
              primary
              content="Add column"
              icon="plus"
              labelPosition="left"
            />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  board: state.board,
  user: state.user
});

export default connect(mapStateToProps)(Board);
