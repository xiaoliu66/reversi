import React, { Component } from 'react'
import Square from "../Square";
import "../../index.css"

export default class Board extends Component {
    state = {
        x: Array(3).fill(0),
        y: Array(3).fill(0),
        data: 0,
    };

    renderSquare(i) {
        return (

            this.state.y.map((e, index) => {
                let temp = i * this.state.y.length + index;
                return (<Square
                    key={temp}
                    value={this.props.squares[temp]}
                    onClick={() => this.props.onClick(temp)}
                />)
            })

            /*<Square
               value={this.props.squares[i]}
               onClick={() => this.props.onClick(i)}
           /> */
        );
    }

    render() {
        return (
            <div>
                {this.state.x.map((element, index) => {
                    return (
                        <div className="board-row" key={index}>
                            {this.renderSquare(index)}
                        </div>)

                })}
                {/* <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div> */}
                {/* <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div> */}
            </div>
        );
    }
}
