import React, { Component } from 'react'
import Board from "../Board";
import "../../index.css"
import  calculateWinner  from "../../utils/CalculateWinner";

export default class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [
                {
                    squares: Array(9).fill(null),
                },
            ],
            status: false,
            stepNumber: 0,
        };
    }

    // React中自定义函数的3种写法之一。
    handleClick = (i) => {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        // console.log("his: ", history);

        const current = history[history.length - 1];
        // console.log("curr: ", current);

        const squares = current.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.status === true ? "😅" : "🤗";
        // console.log("squares[i]: ", squares[i]);
        this.setState({
            history: history.concat([
                {
                    squares: squares,
                },
            ]),
            stepNumber: history.length,
            status: !this.state.status,
        });
    }

    // React中自定义函数的3种写法之一。
    jumpTo(step) {
        this.setState({
            stepNumber: step,
            status: step % 2 === 0,
        });
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);

        const moves = history.map((step, move) => {
            const desc = move ? "Go to move #" + move : "Go to game start";
            return (
                <li key={move}>
                    <button onClick={() => this.jumpTo(move)}>{desc}</button>
                </li>
            );
        });

        let status;
        if (winner) {
            status = "Winner: " + winner;
        } else {
            status = "Next player: " + (this.state.status ? "😅" : "🤗");
        }

        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={current.squares}
                        onClick={this.handleClick}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}
