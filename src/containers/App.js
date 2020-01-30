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