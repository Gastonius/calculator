import React, {Component} from 'react'
import {connect} from 'react-redux'

import MathInput from '../components/mathInput'
import Results from '../components/results'

import {setOperation} from '../actions/operation'
import styles from './app.css'

class App extends Component {
  render () {
    return (
      <div>
        <div className={styles.inputEncloser}>
          <MathInput />
        </div>
        <div className={styles.resultsEncloser}>
          <Results />
        </div>
      </div>
    )
  }
}

export default connect(state => state)(App);
