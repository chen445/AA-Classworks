import React from 'react';
import {PokemonIndexItem} from './pokemon_index_item'
import {Route} from 'react-router-dom'
import pokemonDetailContainer from './pokemon_detail_container'

class PokemonIndex extends React.Component{
  constructor(props){
  super(props)
  }
  
  componentDidMount(){
  this.props.requestAllPokemon()
  }
  
  render(){
    const pokemonItems = this.props.pokemon.map(poke => (
        <PokemonIndexItem key={poke.id} pokemon={poke} />
      ));
    
    return (
    <section className="pokedex">
      <Route path="/pokemon/:pokemonId" component={pokemonDetailContainer}/>
      <ul>{pokemonItems}</ul>
    </section>
    )
  }
  }
  
  
  export default PokemonIndex;