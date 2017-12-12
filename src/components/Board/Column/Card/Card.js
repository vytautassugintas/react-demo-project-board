import React, { Component } from 'react'
import { DragSource } from 'react-dnd';
import { Card, Icon } from 'semantic-ui-react';

const cardSource = {
    beginDrag(props) {
      return {
          item: props.item
      };
    }
  };

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

class ColumnCard extends Component {
  render() {
    const {connectDragSource, isDragging} = this.props;
    return connectDragSource(
        <div style={{paddingTop: 12}}>
          <Card style={{opacity: isDragging ? 0.5 : 1, cursor: 'move'}}>
            <Card.Content>
              <Card.Header>{this.props.item.title} <Icon link name='ellipsis horizontal' /></Card.Header>
              <Card.Meta>{this.props.item.timeAdded.toDateString()}</Card.Meta>
            </Card.Content>
          </Card>
        </div>
    )
  }
}

export default DragSource("ColumnCard", cardSource, collect)(ColumnCard);
