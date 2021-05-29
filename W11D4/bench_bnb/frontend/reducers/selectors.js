
export const selectCurrentUser = state => {
  return state.entities.users[state.session.id]
}