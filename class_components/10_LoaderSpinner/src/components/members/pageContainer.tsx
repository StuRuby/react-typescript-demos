import * as React from 'react';
import { connect } from 'react-redux';
import { State } from '../../reducers';
import { fetchMembersAction } from './actions/fetchMembers';
import { MembersPage } from './page';

const mapState = (state: State) => ({
    members: state.members
});

const mapDispatch = dispatch => ({
    fetchMembers: () => dispatch(fetchMembersAction())
});

export const MembersPageContainer = connect(
    mapState,
    mapDispatch
)(MembersPage);
