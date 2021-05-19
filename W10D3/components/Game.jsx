import React from 'react'
import * as Minesweeper from './../minesweeper.js'
import Board from './Board'
import Tile from './Tile'

class Game extends React.Component{
    constructor(props){
        super(props);
        this.state={board: new Minesweeper.Board()}
        this.updateGame= this.updateGame.bind(this);
    }

    updateGame(){

    }

    render(){

        return(
            <div>
                <h1></h1>
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