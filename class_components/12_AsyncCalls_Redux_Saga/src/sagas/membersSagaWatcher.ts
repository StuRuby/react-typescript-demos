import { fork, all, takeLatest } from 'redux-saga/effects';
import { fetchMembers } from './membersSaga';
import { actionTypes } from '../common/constants/actionTypes';

function* watchLoadMembersRequest() {
    while (true) {
        yield takeLatest(actionTypes.FETCH_MEMBER_REQUEST, fetchMembers);
    }
}

export default function* root() {
    yield all([fork(watchLoadMembersRequest)]);
}
