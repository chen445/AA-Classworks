import{RECEIVE_STEP, RECEIVE_STEPS,REMOVE_STEP} from "../actions/step_actions";


const stepsReducer = (state = {}, action) => {
  Object.freeze(state)
  const nextState = {};
  switch (action.type) {
    case RECEIVE_STEPS:
      action.steps.forEach(step => {
        nextState[step.id]=step;
      });
       return nextState;
    case RECEIVE_STEP:
      const newStep={[action.step.id]: action.step}
      return Object.assign({},state,newStep);
    case REMOVE_STEP:
      const newState=Object.assign({},state);
      delete newState[action.step.id];
      return newState;
    default:
      return state;
  }
};

export default stepsReducer;