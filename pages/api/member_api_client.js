export default class MemberApiClient {
    constructor(implementedInstance) {
        this.implementedInstance = implementedInstance
    }

    fetchMembers() {
        return this.implementedInstance.fetchMembers()
    }

    fetchAccesses() {
        return this.implementedInstance.fetchAccesses()
    }

    fetchAccessByStudentId(student_id) {
        return this.implementedInstance.fetchAccessByStudentId(student_id)
    }
}
