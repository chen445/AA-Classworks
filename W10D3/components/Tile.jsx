import React from 'react'

class Tile extends React.Component{
    constructor(props){
        super(props)
        
    }

    render(){
      const tile = this.props.tile; 

      const text = tile.explored && tile.bombed ? '💣' : 
                   tile.explored && !tile.bombed ? tile.adjacentBombCount() :
                   tile.flagged ? '⚐' : ''
  
      return(
        <div>{text}</div>
        
        )
      }
    }
    
    export default Tile
    
    // const text = this.props.tile.bombed ? '💣' :
    //              this.props.tile.flagged ? '⚐' : 
    //              this.props.tile.explored ? 
    //                 this.props.tiles.adjacentBombCount() : ''