import React, { Component } from 'react'
import lywoImg from '../../img/Lywo.png'

export default class Lywo extends Component {
  state={
    showHint: false
  }

  componentDidUpdate(prevProps) {
    // If the hint changed -> we don´t show it until the user asks for it.
    let hintChanged = (this.props.hint !== prevProps.hint);
    if(hintChanged){
      this.setState({showHint:!hintChanged});
    }
    
  }

  onLywoClicked = event =>{
    event.preventDefault();
    this.setState({showHint:true});
  }

  render() {
    const { hint } = this.props;
    return (
      <div className="flex-centered">
        <div id="lywo-message-container" className="clickable">
          <p id="lywo-message" onClick={this.onLywoClicked}> {this.state.showHint? hint : 
            (<span>I´m <span className="primary-color">Lywo </span><img id="lywo-tiny" src={lywoImg} alt="Lywo Character" style={{width:30, height:30}}/> and I will be your guide! <br/>
            I hope you have fun while learning.
             You can tap on me for hints.</span>)}
          </p>
        </div>
        <a id="lywo-image" href="!#" onClick={this.onLywoClicked}>
          <img src={lywoImg} alt="Lywo Character" style={{width:150, height:150}}/>
        </a>
      </div>
    )
  }
}
