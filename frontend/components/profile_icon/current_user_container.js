import { connect} from 'react-redux';
import { updateProfile} from '../../actions/profile_actions';
import CurrentUser from './current_user';

const msp = (state) => ({
  currentUser: state.entities.users[state.session.id]
})

const mdp = (dispatch) => ({
  updateProfile: (profile) => dispatch(updateProfile(profile))
})

export default connect(msp, mdp)(CurrentUser)