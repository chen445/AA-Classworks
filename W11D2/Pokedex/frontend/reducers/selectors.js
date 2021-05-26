export const selectAllPokemon = (state) => {
    if (state.entities.pokemon === undefined) {
        return [];
    }

    return Object.values(state.entities.pokemon);
}