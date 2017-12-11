import React, {Component} from 'react'
import {Container, Label, Button, Segment, Menu, Dropdown, Icon, Grid, Card, Form, TextArea} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {addColumn, addItemToColum, removeColumn, toggleColumnInput} from '../../store/actions/board.actions';

import './Board.css';
import { height } from 'window-size';

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
    const cols = this.props.board.map(column => {
        let el = "";
        const items = column.items.map(item => {
            return <p>{item.title}</p>
          })

        const showColumnInput = column.showAddCardInput ? 
          <Form>
            <Form.Group inline>
              <TextArea name="cardTitle" value={this.state.cardTitle} onChange={(e) => this.handleChange(e)} placeholder='Tell us more' style={{ minHeight: 100 }} />
            </Form.Group>
            <Button.Group attached='bottom'>
              <Button primary onClick={ () => this.addCard(column.id, this.state.cardTitle) }>Add</Button>
              <Button onClick= { () => this.toggleAddCardInput(column.id) }>Cancel</Button>
          </Button.Group>
          </Form>
          : null;

        return (
          <Grid.Column style={{maxWidth: 315}}>
            <Menu attached='top' borderless>
              <Menu.Item><h4>{column.name} <Label circular as='a'>{column.items.length}</Label></h4></Menu.Item>
              <Menu.Menu position='right'>
                <Menu.Item name='video camera' onClick= { () => this.toggleAddCardInput(column.id) }>
                  <Icon name='plus' />
                </Menu.Item>
                <Menu.Item name='video play' onClick= {() => this.removeColumn(column.id)}>
                  <Icon name='ellipsis horizontal' />
                </Menu.Item>
              </Menu.Menu>
            </Menu>
            <Segment style={{minHeight: 500}} attached='bottom'>
              {showColumnInput}
              {items}
            </Segment>

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