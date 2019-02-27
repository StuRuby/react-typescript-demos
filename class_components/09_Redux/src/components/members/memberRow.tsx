import * as React from 'react';
import { MemberEntity } from '../../model';
import { Link } from 'react-router-dom';

interface Props {
    member: MemberEntity;
}

export const MemberRow: React.StatelessComponent<Props> = ({ member }) => (
    <tr>
        <td>
            <img src={member.avatar_url} className="avatar" />
        </td>
        <td>
            <Link to={`/member/${member.id}`}> {member.id} </Link>
        </td>
        <td>
            <span>{member.login}</span>
        </td>
    </tr>
);
