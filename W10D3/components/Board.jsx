import React from 'react'


class Board extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        this.props.board.grid.map((row,index)=>{
            row.map((tile,index2)=>{
                <Tile
                    updateGame={this.props.updateGame}
                    tile=
                ></Tile>

            }
        }
        return(
            <div>

            </div>
        )
    }
}

export default Board

