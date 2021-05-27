import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {receiveSinglePokemon, requestSinglePokemon} from './actions/pokemon_actions';
import {fetchSinglePokemon} from './util/api_util'
import {selectPokemonMovesNames} from './reducers/selectors'

document.addEventListener("DOMContentLoaded", () => {
  
  const store = configureStore();

  window.store = store;
  window.dispatch = store.dispatch;
  window.getState = store.getState;
  window.receiveSinglePokemon = receiveSinglePokemon;
  window.requestSinglePokemon = requestSinglePokemon;
  window.fetchSinglePokemon = fetchSinglePokemon;
  window.selectPokemonMovesNames = selectPokemonMovesNames
  
  const rootEl = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, rootEl)

})