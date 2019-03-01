import { FormValidationResult } from 'lc-form-validation';
import { actionTypes } from '../../../common/constants/actionTypes';
import { MemberEntity } from '../../../model';
import * as toastr from 'toastr';
import { memberAPI } from '../../../api/member';
import { memberFormValication } from '../memberFormValidation';

const saveMemberActionCompleted = (
    formValidationResult: FormValidationResult
) => ({
    type: actionTypes.SAVE_MEMBER,
    payload: formValidationResult
});

const saveMember = (member: MemberEntity) => {
    memberAPI
        .saveMember(member)
        .then(() => {
            toastr.success('Member saved!');
            history.back();
        })
        .catch(toastr.error);
};

export const saveMemberAction = (member: MemberEntity) => dispatch => {
    memberFormValication.validateForm(member).then(formValidationResult => {
        if (formValidationResult.succeeded) {
            saveMember(member);
        }
        dispatch(saveMemberActionCompleted(formValidationResult));
    });
};
