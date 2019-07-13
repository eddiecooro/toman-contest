import React from 'react';
import './App.css';
import {Layers} from "./menu/Layers";
import {Board} from "./board/Board";
import {State} from "./menu/State";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            n: this.props.n,
            board: JSON.parse(JSON.stringify(this.props.board)),
            currentLayer: 0,
            turn: 1, // turn is 1 or 2
        };

    }

    render() {
        return <div className="game-container">
            <div className="game">
                <h1>MinRoob</h1>
                <State/>
                <Layers n={this.state.n} board={this.state.board}/>
                <Board n={this.state.n} board={this.state.board[0]} type={'main'}/>
            </div>
        </div>;
    }
}

export default App;
