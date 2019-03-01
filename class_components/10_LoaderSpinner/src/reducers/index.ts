import { combineReducers } from 'redux';
import { MemberEntity, MemberErrors } from '../model';
import { membersReducer } from './members';
import { memberReducer } from './member';
import { memberErrorReducer } from './memberError';

export interface State {
    members: MemberEntity[];
    member: MemberEntity;
    memberErrors: MemberErrors;
}

export const state = combineReducers<State>({
    members: membersReducer,
    member: memberReducer,
    memberErrors: memberErrorReducer
});
