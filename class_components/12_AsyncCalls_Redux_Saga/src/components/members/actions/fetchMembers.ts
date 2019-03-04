import { memberAPI } from '../../../api/member';
import { actionTypes } from '../../../common/constants/actionTypes';
import { MemberEntity } from '../../../model';
import { trackPromise } from 'react-promise-tracker';

const fetchMemberCompleted = (members: MemberEntity[]) => ({
    type: actionTypes.FETCH_MEMBER_REQUEST,
    payload: members
});

export const fetchMembersAction = () => dispatch => {
    trackPromise(
        memberAPI
            .fetchMembersAsync()
            .then(members => dispatch(fetchMemberCompleted(members)))
    );
};
