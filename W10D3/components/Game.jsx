import React from 'react'
import * as Minesweeper from './../minesweeper.js'
import Board from './Board'
import Tile from './Tile'

class Game extends React.Component{
    constructor(props){
        super(props);
        this.state={board: new Minesweeper.Board(4, 8)}
        this.updateGame= this.updateGame.bind(this);
    }

    updateGame(){

    }

    render(){

        return(
            <div>
                <div>
                    <Board
                        board={this.state.board}
                        updateGame={this.updateGame}>
                    </Board>
                </div>
            </div>
        )
    }
}



export default Game