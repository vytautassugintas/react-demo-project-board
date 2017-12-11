import { combineReducers } from 'redux'
import board from './board.reducers'

const boardApp = combineReducers({
    board
})

export default boardApp