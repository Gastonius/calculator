import React from 'react'
import {connect} from 'react-redux'
import math from 'mathjs'

import styles from './mathInput.css'

import {storeOperation} from '../../actions/operation'

class MathInput extends React.Component {
  state = {
    operation: '',
    pointer: null,
    error: null
  }

  checkOperation = (operation) => {
    let result = false
    try {
      result = math.eval(operation)
    } catch(e) {}
    return result
  }

  handleOnKeyDown = (event) => {
    const { operations } = this.props.operationReducer

    switch (event.key) {
      case 'Enter':
        if (!this.state.error) {
          const result = this.checkOperation(this.state.operation)
          if (result) {
            this.props.dispatch(
              storeOperation({ operation: this.state.operation, result: result })
            )
            this.setState({ pointer: null, operation: '' })
          } else {
            this.setState({ error: 'Sorry, I don`t understand that.'})
          }  
        }
        break;
      case 'ArrowUp':
        if (operations.length) {
          const pointerUp = !this.state.pointer
            ? operations.length - 1
            : this.state.pointer > 0
              ? this.state.pointer - 1
              : 0
            this.setState({ error: null, pointer: pointerUp, operation: operations[pointerUp].operation })  
        }
        break;
      case 'ArrowDown':
        if (operations.length) {
          const pointerDn = this.state.pointer === null
            ? 0
            : this.state.pointer < operations.length - 1
              ? this.state.pointer + 1
              : 0
            this.setState({ error: null, pointer: pointerDn, operation: operations[pointerDn].operation })
        }
        break;
      default:
        if (this.state.error) this.setState({ error: null })
    }
  }

  handeOnChange = (value) => {
    this.setState({ operation: value })
  }

  render () {
    return (
      <div className={styles.fieldEncloser}>
        <input
          className={styles.fieldinput}
          type="text"
          value={this.state.operation}
          onKeyDown={this.handleOnKeyDown}
          onChange={e => this.handeOnChange(e.target.value)}
          placeholder='Enter what your want to calculate'
        />
        {this.state.error &&
          <div className={styles.error}>{this.state.error}</div>
        }
      </div>
    )
  }
}

export default connect(state => state)(MathInput);
