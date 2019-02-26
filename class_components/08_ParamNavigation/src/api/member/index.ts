import { MemberEntity } from '../../model';
import { members } from './mockData';

const baseUrl = 'https://api.github.com/orgs/lemoncode';

let mockMembers = members;

const fetchMembers = (): Promise<MemberEntity[]> => {
    return Promise.resolve(members);
};

const fetchMembersAsync = (): Promise<MemberEntity[]> => {
    const membersUrl = `${baseUrl}/members`;
    return fetch(membersUrl)
        .then(resp => resp.json())
        .then(mapToMembers);
};

const mapToMembers = (githubMembers: any): MemberEntity[] => {
    return githubMembers.map(mapToMember);
};

const mapToMember = (githubMember): MemberEntity => {
    return {
        id: githubMember.id,
        login: githubMember.login,
        avatar_url: githubMember.avatar_url
    };
};

const saveMember = (member: MemberEntity): Promise<boolean> => {
    const index = mockMembers.findIndex(m => m.id === member.id);

    index >= 0 ? updateMember(member, index) : insertMember(member);

    return Promise.resolve(true);
};

const updateMember = (member: MemberEntity, index: number) => {
    mockMembers = [
        ...mockMembers.slice(0, index),
        member,
        ...mockMembers.slice(index + 1)
    ];
};

const insertMember = (member: MemberEntity) => {
    member.id = mockMembers.length;

    mockMembers = [...mockMembers, member];
};

export const memberAPI = {
    fetchMembers,
    fetchMembersAsync,
    saveMember,
};
