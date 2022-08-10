const routes = {
    root: '/',

    // Access
    access: '/access',
    get accessSignup() {
        return `${this.access}/signup`;
    },

    // Workspace
    workspace: '/workspace',
    get workspaceHome() {
        return `${this.workspace}/home`;
    },
    get workspaceActivities() {
        return `${this.workspace}/activities`;
    },
    get workspaceConversation() {
        return `${this.workspace}/conversation`;
    },
    get workspaceAttendance() {
        return `${this.workspace}/attendance`;
    },
    get workspaceUsers() {
        return `${this.workspace}/users`;
    },
    get workspaceSettings() {
        return `${this.workspace}/settings`;
    }
};

export default Object.freeze(routes);