import React from 'react'

export default function Question() {
  return (
    <div>
      <h4>Question</h4>
      <div className="question-card">
        <h6 className="card-title">Which of the following methods allow you to add an element to myArray at the end?</h6>
        <div className="answer-options">
          <div className="answer-option">
            <span>myArray.pop(element)</span>
          </div>
          <div className="answer-option">
            <span>myArray.shift(element)</span>
          </div>
          <div className="answer-option">
            <span>myArray.unshift(element)</span>
          </div>
          <div className="answer-option">
            <span>myArray.push(element)</span>
          </div>
        </div>
      </div>
    </div>
  )
}
