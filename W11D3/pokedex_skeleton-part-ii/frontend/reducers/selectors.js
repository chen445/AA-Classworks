export const selectAllPokemon = (state) => {
  return Object.values(state.entities.pokemon)
}

export const selectPokemonMovesNames = (state) => {
  console.log(state)
   const names = Object.values(state.entities.moves).map(move=> {
    return move.name
  })
  return names
}

export const selectPokemonItems = (state) => {
  const urls = Object.values(state.entities.items).map(image => {
    return image.imageUrl
  })
  return urls
}
  