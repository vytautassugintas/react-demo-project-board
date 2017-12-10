import React, {Component} from 'react'
import {Container, Button, Segment, Grid} from 'semantic-ui-react';
import logo from './logo.svg';
import './App.css';
import {log} from 'core-js/library/web/timers';

class App extends Component {

  prevId = 0;

  constructor() {
    super();
    this.state = {
      columns: [
        {
          id: this.prevId,
          name: "Initial column",
          items: []
        }
      ]
    }
  }

  addColumn = () => {
    this.prevId += 1;
    this.setState({
      columns: [
        ...this.state.columns, {
          id: this.prevId,
          name: "Column",
          items: []
        }
      ]
    })
  }

  addCard = (columnToEdit) => {
    const newCols = this
      .state
      .columns
      .map(column => {
        if (column.id === columnToEdit.id) {
          column.items = [
            ...column.items, {
              name: "item"
            }
          ]
        }
        return column;
      })

    this.setState({columns: newCols})

  }

  render() {
    const cols = this
      .state
      .columns
      .map(column => {
        const items = column
          .items
          .map(item => {
            return <p>{item.name}</p>
          })
        return <Grid.Column>
          <Button
            onClick={() => this.addCard(column)}
            primary
            content='Add card'
            icon='plus'
            labelPosition='left'/>
          <p>{column.name}</p>
          {items}
        </Grid.Column>
      })

    return (
      <div>
        <Grid columns={cols.length + 1} divided>
          {cols}
          <Grid.Column>
            <Button
              onClick={this.addColumn}
              primary
              content='Add column'
              icon='plus'
              labelPosition='left'/>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default App;
