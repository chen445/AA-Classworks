import React, { Component } from 'react';


class PokemonIndex extends Component {

    constructor(props) {
        super(props)
        console.log(this.props.pokemon)
    }

    componentDidMount() {
        this.props.requestAllPokemon();
    }
   
    render() { 
        return (
            <ul>
                {this.props.pokemon !== undefined 
                    ? this.props.pokemon.map((poke) => {
                        return <li key={poke.id}><img src={poke.image_url}/>{poke.name}</li>
                    })
                    : ''
                }
            </ul>
        )
    }
}
 
export default PokemonIndex;