import 'regenerator-runtime/runtime';
import { call, put } from 'redux-saga/effects';
import { memberAPI } from '../api/member';
import { fetchMembersCompletedAction } from '../components/members/actions';
import { MemberEntity } from '../model/memberEntity';

export function* fetchMembers() {
    let members: Array<MemberEntity>;
    members = yield call(memberAPI.fetchMembersAsync);
    yield put(fetchMembersCompletedAction(members));
}
