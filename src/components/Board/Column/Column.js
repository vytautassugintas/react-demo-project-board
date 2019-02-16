import React, { useState } from "react";
import {
  Label,
  Button,
  Segment,
  Menu,
  Icon,
  Grid,
  Form,
  TextArea
} from "semantic-ui-react";
import BoardCard from "./Card/Card";
import {
  addItemToColum,
  removeColumn,
  removeItemFromColumn,
  toggleColumnInput
} from "../../../store/actions/board.actions";
import { DropTarget } from "react-dnd";

const boardTarget = {
  drop(props, monitor) {
    const { item } = monitor.getItem();
    const { dispatch } = props;

    dispatch(
      removeItemFromColumn({ columnId: item.columnId, itemId: item.id })
    );
    dispatch(addItemToColum({ columnId: props.column.id, text: item.title }));

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

function Column(props) {
  const [cardTitle, setCardTitle] = useState("");

  const addCard = (columnId, title) => {
    dispatch(addItemToColum({ columnId: columnId, text: title }));
    setCardTitle("");
  };

  const toggleAddCardInput = columnId => {
    dispatch(toggleColumnInput(columnId));
  };

  const handleChange = e => {
    setCardTitle(e.target.value);
  };

  const { connectDropTarget, column, dispatch } = props;

  const items = column.items.map(item => (
    <BoardCard key={item.id} item={item} />
  ));

  const showColumnInput = column.showAddCardInput ? (
    <Form>
      <Form.Group inline>
        <TextArea
          name="cardTitle"
          value={cardTitle}
          onChange={e => handleChange(e)}
          placeholder="Tell us more"
          style={{ minHeight: 100 }}
        />
      </Form.Group>
      <Button.Group attached="bottom">
        <Button primary onClick={() => addCard(column.id, cardTitle)}>
          Add
        </Button>
        <Button onClick={() => toggleAddCardInput(column.id)}>Cancel</Button>
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
              onClick={() => toggleAddCardInput(column.id)}
            >
              <Icon name="plus" />
            </Menu.Item>
            <Menu.Item
              name="video play"
              onClick={() => removeColumn(column.id)}
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

export default DropTarget("ColumnCard", boardTarget, collect)(Column);
