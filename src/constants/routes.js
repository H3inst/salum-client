const routes = {
    root: '/',

    // Access
    access: '/access',
    get accessSignup() {
        return `${this.access}/signup`;
    },

    // Workspace
    workspace: '/workspace',
    workspaceCalendar: 'calendar',
    workspaceNotes: 'notes',
    workspaceScores: 'scores',
    
    get workspaceS() {
        return `${this.workspace}/subject`;
    },
    get workspaceSubjectId() {
        return `${this.workspaceS}/:subjectId`;
    },
    workspaceSubjectActivities: 'activities',
    workspaceSubjectConversation: 'conversation',
    workspaceSubjectAttendance: 'attendance',
    workspaceSubjectUsers: 'users',
    workspaceSubjectSettings: 'settings'

};

export default Object.freeze(routes);