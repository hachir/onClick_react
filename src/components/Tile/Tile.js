import React, {Component} from "react";
import "./Tile.css";

// Using class component for compatibility with FlipMove animations
class Tile extends Component {

  render() {

    return (<div className="card">
          <img src={`./images/${this.props.image}`}
               onClick={this.props.handleClick}
               alt={this.props.name}/>
        </div>
    );
  }
}


export default Tile;