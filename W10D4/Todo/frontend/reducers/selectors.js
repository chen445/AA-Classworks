export const allTodos = (todos) => {
  const todosArray = Object.values(todos);
  return todosArray;
};

export const stepsByTodoId = (state, todoId) => {
  const stepsArray = Object.values(state.steps);
  return stepsArray.filter(step => {step.id === todoId});
};