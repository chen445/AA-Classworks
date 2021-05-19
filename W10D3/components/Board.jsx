import React from 'react'
import Tile from './Tile';


class Board extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        console.log(this.props)
        const rows = this.props.board.grid.map((row,index) => {
            const tiles = row.map((tile,index2) => {
               return( <Tile
                    updateGame={this.props.updateGame}
                    tile={tile}
                    key={index2}
                ></Tile>)
            });
            return(
              <div key={index}>{tiles}</div>
            )
        });
        return(
            <div>{rows}</div>
        )
    }
}

export default Board

