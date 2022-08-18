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
        return `${this.workspaceS}/:subjectId/`;
    },
    get workspaceSubjectActivities() {
        return `activities`;
    },
    get workspaceSubjectConversation() {
        return `conversation`;
    },
    get workspaceSubjectAttendance() {
        return `attendance`;
    },
    get workspaceSubjectUsers() {
        return `users`;
    },
    get workspaceSubjectSettings() {
        return `settings`;
    }
};

export default Object.freeze(routes);