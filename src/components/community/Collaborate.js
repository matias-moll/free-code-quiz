import React, { Component } from 'react'

export default class Collaborate extends Component {
  render() {
    const options = ["option1", "option2", "option3", "option4"];
    return (
      <div>
        <h1>Collaborate</h1>
        <p> Submit your question here and we will review it and let you know if it is approved!</p>

        <form action="">

          <div id="question-input" className="input-pair">
            <label htmlFor="question"><strong>Question: </strong></label>
            <input type="text" name="question" id="questionField"/>
          </div>

          { options.map((elem,index) => (
            <div className="input-pair" key={index}>
              <label htmlFor={elem}>Option {index+1}:</label>
              <input type="text" name={elem} id={elem}/>
            </div>
          ))}

          <input id="btn-collaborate" className="btn btn-primary" type="submit" value="Collaborate!"/>
        </form>
      </div>
    )
  }
}
