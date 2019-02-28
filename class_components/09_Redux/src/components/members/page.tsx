import * as React from 'react';
import { Link } from 'react-router-dom';
import { MemberEntity } from '../../model';
import { memberAPI } from '../../api/member';
import { MemberHeader } from './memberHeader';
import { MemberRow } from './memberRow';

interface Props {
    members: MemberEntity[];
    fetchMembers(): void;
}

export class MembersPage extends React.Component<Props, {}> {
    componentDidMount() {
        this.props.fetchMembers();
    }

    render() {
        return (
            <div className="row">
                <h2>Members Page</h2>
                <table className="table">
                    <thead>
                        <MemberHeader />
                    </thead>
                    <tbody>
                        {this.props.members.map(member => (
                            <MemberRow key={member.id} member={member} />
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}
