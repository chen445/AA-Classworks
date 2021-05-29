import { connect } from 'react-redux';
import { loginUser } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';
import SessionForm from './session_form';

const mapStateToProps = (state,ownProps) => {
  return ({
    errors: state.errors,
    formType: 'login'
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    processForm: (user) => dispatch(loginUser(user))
  });
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionForm));