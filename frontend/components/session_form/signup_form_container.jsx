import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';
import { createProfile } from '../../actions/profile_actions';

const mapStateToProps = ({ errors }) => ({
    errors: errors.session,
    formType: 'Signup',
    navLink: <Link to="/login">Login instead</Link>,
})

const mapDispatchToProps = dispatch => ({
    processForm: (user) => dispatch(signup(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
