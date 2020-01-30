import React, {Component} from 'react';
import GameBoard from '../components/GameBoard';
import data from "../data";
import 'font-awesome/css/font-awesome.min.css';


class App extends Component {

  state = {
    currentScore: 0,
    highScore: 0,
    gameTiles: data.map(tile => {
      tile.previouslyClicked = false;
      return tile;
    }),
    animate: false
  };

  shuffleTiles = (tiles) => {
       // Shuffle array in place
    let shuffledArray = tiles;

    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  handleTileClick = (tileId) => {
    const gameTiles = [...this.state.gameTiles];

    let clickedTile = gameTiles.find(tile => tile.id === tileId);
 // Determine outcome
 if (clickedTile.previouslyClicked) {
    this.endGameAndReset();
  } else {
    clickedTile.previouslyClicked = true;
    this.setState({
      currentScore: this.state.currentScore + 1,
      gameTiles: this.shuffleTiles(gameTiles),
      animate: false
    });
  }
};

endGameAndReset() {
  this.updateHighScore();
  const resetData = this.state.gameTiles.map(t => {
    t.previouslyClicked = false;
    return t;
  });
  this.setState({
    currentScore: 0,
    animate: true,
    gameTiles: resetData
  });
}

updateHighScore = () => {
  if (this.state.currentScore > this.state.highScore)
    this.setState({
      highScore: this.state.currentScore
    })
};