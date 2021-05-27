import {RECEIVE_SINGLE_POKEMON} from './../actions/pokemon_actions'

const movesReducer = (state={}, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_SINGLE_POKEMON:
        const nextState = action.poke.moves
        return Object.assign({}, nextState, state);
    default:
        return state;
    }
}

export default movesReducer