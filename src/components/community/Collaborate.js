import React, { Component } from 'react'

export default class Collaborate extends Component {
  render() {
    const options = ["option1", "option2", "option3", "option4"];
    return (
      <div>
        <h1>Collaborate</h1>
        <p> Submit your question here and we will review it and let you know if it is approved! Or collaborate to the codebase directly on github.</p>

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
          
          <div className="flexed-space-between">
            <div id="correct-option" className="input-pair input-section">
              <label htmlFor="correctOption"><strong>Correct Option: </strong></label>
              <input type="number" name="correctOption" id="correctOptionField"/>
            </div>

            <div className="input-pair input-section">
              <label htmlFor="category"><strong>Category: </strong></label>
              <select name="category" id="categoryField">
                <option value="javascript">Javascript</option>
                <option value="HTML">HTML</option>
                <option value="CSS">CSS</option>
                <option value="generalDevelopment">General Development</option>
              </select>
            </div>
          </div>

          <div className="input-pair input-section">
            <label htmlFor="hint"><strong>Hint: </strong></label>
            <input type="text" name="hint" id="hintField"/>
          </div>

          <div className="flexed-space-between mt-3">
            <input id="btn-collaborate" className="btn btn-primary mt-3" type="submit" value="Submit!"/>
            <button className="btn btn-light mt-3"><a href="https://github.com/matias-moll/free-code-quiz"><i class="fab fa-github"></i> Collaborate</a></button>
          </div>
        </form>
      </div>
    )
  }
}
