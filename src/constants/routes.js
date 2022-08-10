const routes = {
    root: '/',

    // Access
    access: '/access',
    get accessSignup() {
        return `${this.access}/signup`;
    },

    // Workspace
    workspace: '/workspace',
    
    get workspaceS() {
        return `${this.workspace}/subject`;
    },
    get workspaceSubjectId() {
        return `${this.workspaceS}/:subjectId`;
    },
    get workspaceSubjectActivities() {
        return `${this.workspaceSubjectId}/activities`;
    },
    get workspaceSubjectConversation() {
        return `${this.workspaceSubjectId}/conversation`;
    },
    get workspaceSubjectAttendance() {
        return `${this.workspaceSubjectId}/attendance`;
    },
    get workspaceSubjectUsers() {
        return `${this.workspaceSubjectId}/users`;
    },
    get workspaceSubjectSettings() {
        return `${this.workspaceSubjectId}/settings`;
    }
};

export default Object.freeze(routes);