import React, {Component} from 'react';
import PlayerCard from './PlayerCard';

class Game extends Component {
  constructor() {
    super();
    this.signs = ["rock", "scissors", "paper"]
    this.state = {
      playerOne: "rock",
      playerTwo: "scissors",
    }
  }

  //this is where my methods will go
  playGame = () => {
    this.setState({
      playerOne: this.signs[Math.floor(Math.random() * 3)],
      playerTwo: this.signs[Math.floor(Math.random() * 3)],

    })
  }

  decideWinner = () => {
    if(this.state.playerOne === this.state.playerTwo){
      return "It's a tie"
    }
    else if((this.state.playerOne === "rock"  && this.state.playerTwo === "scissors") || (this.state.playerOne === "paper" && this.state.playerTwo === "rock") || (this.state.playerOne === "scissors" && this.state.playerTwo === "paper")){
      return "Player one wins!"
    }
    else{
      return "Player two wins!"
    }

  }


  render() {
    return(
      <div className="style">
        <div>
          <PlayerCard sign={this.state.playerOne} />
          <PlayerCard sign={this.state.playerTwo} />
        </div>
        <div className="winner">{this.decideWinner()}</div>
        <button type="button" onClick={this.playGame} >Play the Game :)</button>
      </div>
    )
  }
};

export default Game;
