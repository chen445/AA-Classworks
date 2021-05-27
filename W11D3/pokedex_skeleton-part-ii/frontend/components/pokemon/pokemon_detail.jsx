import React from 'react'

class pokemonDetail extends React.Component {
    constructor(props) {
    super(props)

    }

    componentDidMount() {
        this.props.requestSinglePokemon(this.props.match.params.pokemonId)  
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.pokemonId !== this.props.match.params.pokemonId) {
        this.props.requestSinglePokemon(this.props.match.params.pokemonId)
        }
    }

    render() {
        console.log(this.props)
        const image = this.props.items.forEach(url => {
            return url
        })

        if (!this.props.pokemon) return null
        console.log(this.props.items)
        return(
            <div className="pokemon-detail">
                <img src={this.props.pokemon.imageUrl} />
            <ul>
                <li>Name:{this.props.pokemon.name}</li>
                <li>Type:{this.props.pokemon.pokeType}</li>
                <li>Attack:{this.props.pokemon.attack}</li>
                <li>Defense:{this.props.pokemon.defense}</li>
                <li>Moves:{this.props.moves.join(', ')}</li>

            </ul>
            <h3>Items:</h3>
                {this.props.items.forEach(url => {
                    <img src={url}/>
                })}
                
            </div>
  
        )
    }
}

export default pokemonDetail