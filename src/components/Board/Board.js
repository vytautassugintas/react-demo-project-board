import React, {Component} from 'react'
import {Container, Button, Segment, Grid} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {addColumn, addItemToColum} from '../../store/actions/board.actions';

import './Board.css';

class Board extends Component {
  prevId = 0;

  addColumn = () => {
    this.props.dispatch(addColumn('random stuff'));
  }

  removeColumn = (columnId) => {
    
  }

  addCard = (columnToEdit) => {
    this.props.dispatch(addItemToColum({columnId: columnToEdit, text: 'It\'s item'}));
  }

  render() {
    const cols = this.props.board.map(column => {
        const items = column.items.map(item => {
            return <p>{item.title}</p>
          })

        return (
          <Grid.Column>
            <Button onClick= { () => this.addCard(column.id) } icon='plus'/>
            <Button onClick= {() => this.removeColumn(column.id)} icon='minus'/>
            <p>{column.name}</p>
            {items}
          </Grid.Column>
        )
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
    )
  }
}

const mapStateToProps = state => ({
  board: state.board,
  user: state.user
});

export default connect(mapStateToProps)(Board);