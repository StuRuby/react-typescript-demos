import * as React from 'react';
import { connect } from 'react-redux';
import { State } from '../../reducers';
import { fetchMembersAction, fetchRepositoriesAction } from './actions';
import { MembersPage } from './page';

const mapState = (state: State) => ({
    members: state.members,
    repos: state.repos
});

const mapDispatch = dispatch => ({
    fetchMembers: () => dispatch(fetchMembersAction()),
    fetchRepos: () => dispatch(fetchRepositoriesAction())
});

export const MembersPageContainer = connect(
    mapState,
    mapDispatch
)(MembersPage);
