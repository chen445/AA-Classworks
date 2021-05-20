
import React from 'react'

class Tile extends React.Component{
    constructor(props){
        super(props);
        this.handleClick=this.handleClick.bind(this)
    }

    handleClick(e){
       const flagged = e.altKey ? true : false;
       this.props.updateGame(this.props.tile, flagged)
    }

    render(){
      const tile = this.props.tile; 
      let text
      let cssStat
        if(tile.explored){
            if(tile.bombed){
                text='💣';
                cssStat=' bombed'
            }else{
                text = tile.adjacentBombCount() >0 ? tile.adjacentBombCount(): "";
                cssStat="explored"
            }
        }else if(tile.flagged){
            text = '⚐'
            cssStat = 'flagged'
        }else{
            cssStat = "unexplored"
        }
        cssStat = `tile ${cssStat}`

      
      return(
        <div className={cssStat} onClick={this.handleClick}>{text}</div>
        );
      }
    }
    
    export default Tile
    
    // const text = this.props.tile.bombed ? '💣' :
    //              this.props.tile.flagged ? '⚐' : 
    //              this.props.tile.explored ? 
    //                 this.props.tiles.adjacentBombCount() : ''