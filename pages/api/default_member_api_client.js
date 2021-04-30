import MemberApiClient from "./member_api_client";

export class DefaultMemberApiClient extends MemberApiClient {

    constructor() {
        super()
        this.baseUrl = "http://localhost:8080"
    }

    fetchMembers() {
        const url = this.baseUrl + "/members"

        return fetch(url)
    }

    fetchAccesses() {
        const url = this.baseUrl + "/accesses"

        return fetch(url)
    }

    fetchAccessByStudentId(student_id) {
        const url = this.baseUrl + "/accesses" + "/" + student_id

        return fetch(url)
    }
}

export default new DefaultMemberApiClient()
