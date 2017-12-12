import React, {Component} from 'react'
import {Container, Label, Button, Segment, Menu, Dropdown, Icon, Transition, Grid, Form, TextArea} from 'semantic-ui-react';
import {connect} from 'react-redux';
import BoardCard from './Column/Card/Card';
import {addColumn, addItemToColum, removeColumn, toggleColumnInput} from '../../store/actions/board.actions';
import { DropTarget } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import Column from './Column/Column';

import './Board.css';
import { height } from 'window-size';
import { setTimeout } from 'core-js/library/web/timers';

class Board extends Component {

  constructor(){
    super();
    this.state = {
      cardTitle: ""
    }
  }

  addColumn = () => {
    this.props.dispatch(addColumn('random stuff'));
  }

  removeColumn = (columnId) => {
    this.props.dispatch(removeColumn(columnId));
  }

  addCard = (columnId, title) => {
    this.props.dispatch(addItemToColum({columnId: columnId, text: title}));
    this.state.cardTitle = "";
  }

  toggleAddCardInput = (columnId) => {
    this.props.dispatch(toggleColumnInput(columnId))
  }

  handleChange(e){
    this.setState({[e.target.name]: e.target.value})
 }

  render() {
    const cols = this.props.board.map(column => <Column column={column} />)
    // const columns = this.props.board.
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

;
export default connect(mapStateToProps)(Board);