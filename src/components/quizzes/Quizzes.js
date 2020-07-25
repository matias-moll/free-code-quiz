import React, { Component } from 'react'
import Question from './Question'
import Answer from './Answer'
import Result from './Result'
import Lywo from './Lywo'

export default class Quizzes extends Component {
  render() {
    return (
      <div>
        <Lywo/>
        <Question/>
        <Answer/>
        <Result/>
      </div>
    )
  }
}
