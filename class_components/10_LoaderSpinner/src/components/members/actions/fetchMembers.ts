import { memberAPI } from '../../../api/member';
import { actionTypes } from '../../../common/constants/actionTypes';
import { MemberEntity } from '../../../model';

const fetchMemberCompleted = (members: MemberEntity[]) => ({
    type: actionTypes.FETCH_MEMBERS_COMPLETED,
    payload: members
});

export const fetchMembersAction = () => dispatch => {
    memberAPI
        .fetchMembers()
        .then(members => dispatch(fetchMemberCompleted(members)));
};
