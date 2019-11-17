import { connect } from 'react-redux';
import { createServerMembership } from '../../actions/server_membership_actions';
import ServerExploreItem from './server_explore_item';
import { withRouter } from 'react-router-dom';

const msp = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id]
})  

const mdp = (dispatch) => ({
  createServerMembership: (serverMembership) => dispatch(createServerMembership(serverMembership))
})

export default withRouter(connect(msp, mdp)(ServerExploreItem))