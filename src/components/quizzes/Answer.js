import React, { Component } from 'react'

export default class Answer extends Component {
  render() {
    const {answerExplanation, answerHTML} = this.props.answerDetails;
    return (
      <div>
        <h4>Answer Explanation</h4>
        <div className="question-card">
          <p>{answerExplanation}</p>
          {answerHTML}
        </div>
      </div>
    )
  }
}
