import React from 'react';
import { Provider } from 'react-redux';
import PokemonIndex from './pokemon/pokemon_index'

const Root = ({ store }) => (
  <Provider store={store}>
    <div>Hello, world!</div>
    <PokemonIndex />
  </Provider>
);

export default Root;