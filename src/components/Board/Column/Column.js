import React, { Component } from "react";
import {
  Container,
  Label,
  Button,
  Segment,
  Menu,
  Dropdown,
  Icon,
  Transition,
  Grid,
  Form,
  TextArea
} from "semantic-ui-react";
import { connect } from "react-redux";
import BoardCard from "./Card/Card";
import {
  addColumn,
  addItemToColum,
  removeColumn,
  removeItemFromColumn,
  toggleColumnInput
} from "../../../store/actions/board.actions";
import { DropTarget } from "react-dnd";

const boardTarget = {
  drop(props, monitor, component) {
    const { item } = monitor.getItem();
    props.dispatch(
      removeItemFromColumn({ columnId: item.columnId, itemId: item.id })
    );
    props.dispatch(
      addItemToColum({ columnId: props.column.id, text: item.title })
    );
    return {
      column: props.column
    };
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

class Column extends Component {
  constructor() {
    super();
    this.state = {
      cardTitle: ""
    };
  }

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
    const { connectDropTarget, column } = this.props;
    const items = column.items.map(item => (
      <BoardCard key={item.id} item={item} />
    ));
    const showColumnInput = column.showAddCardInput ? (
      <Form>
        <Form.Group inline>
          <TextArea
            name="cardTitle"
            value={this.state.cardTitle}
            onChange={e => this.handleChange(e)}
            placeholder="Tell us more"
            style={{ minHeight: 100 }}
          />
        </Form.Group>
        <Button.Group attached="bottom">
          <Button
            primary
            onClick={() => this.addCard(column.id, this.state.cardTitle)}
          >
            Add
          </Button>
          <Button onClick={() => this.toggleAddCardInput(column.id)}>
            Cancel
          </Button>
        </Button.Group>
      </Form>
    ) : null;

    return connectDropTarget(
      <div>
        <Grid.Column style={{ maxWidth: 315 }} key={column.id}>
          <Menu attached="top" borderless>
            <Menu.Item>
              <h4>
                {column.name}{" "}
                <Label circular as="a">
                  {column.items.length}
                </Label>
              </h4>
            </Menu.Item>
            <Menu.Menu position="right">
              <Menu.Item
                name="video camera"
                onClick={() => this.toggleAddCardInput(column.id)}
              >
                <Icon name="plus" />
              </Menu.Item>
              <Menu.Item
                name="video play"
                onClick={() => this.removeColumn(column.id)}
              >
                <Icon name="ellipsis horizontal" />
              </Menu.Item>
            </Menu.Menu>
          </Menu>
          <Segment style={{ minHeight: 500 }} attached="bottom">
            {showColumnInput}
            {items}
          </Segment>
        </Grid.Column>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  board: state.board,
  user: state.user
});

export default connect(mapStateToProps)(
  DropTarget("ColumnCard", boardTarget, collect)(Column)
);
