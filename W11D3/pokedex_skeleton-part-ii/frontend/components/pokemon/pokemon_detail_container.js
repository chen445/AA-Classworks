import {connect} from 'react-redux';
import {requestSinglePokemon} from './../../actions/pokemon_actions';
// import {selectAllPokemon} from './../../reducers/selectors';
import PokemonDetail from './pokemon_detail';
import {selectPokemonMovesNames, selectPokemonItems} from './../../reducers/selectors'


const mapStateToProps = (state, ownProps) => ({
  pokemon: state.entities.pokemon[ownProps.match.params.pokemonId],
  moves: selectPokemonMovesNames(state),
  items: selectPokemonItems(state)
})

const mapDispatchToProps = dispatch => ({
  requestSinglePokemon: (pokemonId) => dispatch(requestSinglePokemon(pokemonId))
})

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail)