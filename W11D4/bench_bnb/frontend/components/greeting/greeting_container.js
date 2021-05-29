import { connect } from 'react-redux';
import { selectCurrentUser } from '../../reducers/selectors';

import { logoutUser } from '../../actions/session_actions';
import Greeting from './greeting';

const mapStateToProps = (state) => {
  return ({
    currentUser: selectCurrentUser(state)
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    logout: () => dispatch(logoutUser())
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);