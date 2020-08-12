import React, { Component } from 'react'
import lywoImg from '../../img/Lywo.png'

export default class Lywo extends Component {
  state={
    showHint: false
  }
  componentDidUpdate(prevProps) {
    // If the hint changed -> we don´t show it until the user asks for it.
    if (this.props.hint !== prevProps.hint) {
      this.setState({showHint:false});
    }
  }

  onLywoClicked = event =>{
    event.preventDefault();
    this.setState({showHint:true});
  }

  render() {
    const { hint } = this.props;
    return (
      <div id="lywo-container">
        <div>
          <p id="lywo-message"> {this.state.showHint? hint : 
            (<span>I´m <span className="primary-color">Lywo</span> and I will be your guide! I hope you have fun while learning.
             You can tap on me for hints.</span>)}
          </p>
        </div>
        <a href="!#" onClick={this.onLywoClicked}><img src={lywoImg} alt="Lywo Character" style={{width:150, height:150}}/></a>
      </div>
    )
  }
}
