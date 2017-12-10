import React, {Component} from 'react'
import {Container, Button, Segment, Grid} from 'semantic-ui-react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      columns: [
        {
          name: "Initial column"
        }
      ]
    }
  }

  addColumn = () => {
    this.setState({
      columns: [
        ...this.state.columns, {
          name: "Column"
        }
      ]
    })
  }

  render() {
    const cols = this
      .state
      .columns
      .map(column => {
        return <Grid.Column>
          <p>{column.name}</p>
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
