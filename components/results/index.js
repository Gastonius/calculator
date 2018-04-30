import React from 'react'
import {connect} from 'react-redux'

import styles from './results.css'

class Results extends React.Component {
  render () {
    const { operations } = this.props.operationReducer
    return (
      <div>
        {operations.map( item => <div className={styles.row}>
          <div className={styles.operation}>{item.operation}</div>
          <div className={styles.result}>{item.result}</div>
        </div>)}
      </div>
    )
  }
}

export default connect(
  state => state
)(Results);
