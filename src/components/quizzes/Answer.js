import React, { Component } from 'react'

export default class Answer extends Component {
  render() {
    const {answerExplanation, answerHTML} = this.props.answerDetails;
    return (
      <div>
        <h3>Explanation</h3>
        <div className="question-card">
          <p>{answerExplanation}</p>
          {answerHTML}
        </div>
      </div>
    )
  }
}
