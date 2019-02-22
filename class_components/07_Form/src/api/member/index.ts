import { MemberEntity } from "../../model";
import { members } from "./mockData";

const baseUrl = "https://api.github.com/orgs/lemoncode";

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

export const memberAPI = {
    fetchMembers,
    fetchMembersAsync
};
