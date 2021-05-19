
import React from 'react'

class Tile extends React.Component{
    constructor(props){
        super(props)
        
    }

    render(){
      const tile = this.props.tile; 
      let text
      let cssStat
        if(tile.explored){
            cssStat="tile explored"
            if(tile.bombed){
                text='💣';
                cssStat='tile bombed'
            }else{
                text = tile.adjacentBombCount() >1 ? tile.adjacentBombCount(): "";

            }
        }else if(tile.flagged){
            text = '⚐'
            cssStat = 'tile flagged'
        }else{
            text = ""
            cssStat = "tile"
        }
      
      return(
        <div className="tile-container">
        <div className={cssStat}>{text}T</div>
        </div>
        )
      }
    }
    
    export default Tile
    
    // const text = this.props.tile.bombed ? '💣' :
    //              this.props.tile.flagged ? '⚐' : 
    //              this.props.tile.explored ? 
    //                 this.props.tiles.adjacentBombCount() : ''