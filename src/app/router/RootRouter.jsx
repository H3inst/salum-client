import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import routes from '../../constants/routes';

import Access from '../../components/access/Access';
import AccessLogin from '../../components/access/AccessLogin';
import AccessSignup from '../../components/access/AccessSignup';
import Workspace from '../../components/workspace/Workspace';
import Subject from '../../components/workspace/subject/Subject';

function RootRouter() {

    return (
        <BrowserRouter>
            <Routes>
                {/* Access */}
                <Route path="*" element={<Navigate to={routes.access} />} />
                <Route path={routes.access} element={<Access />}>
                    <Route index element={<AccessLogin />} />
                    <Route path={routes.accessSignup} element={<AccessSignup />} />
                </Route>

                {/* Workspace */}
                <Route path={routes.workspace} element={<Workspace />}>
                    <Route path="*" element={<Navigate to={routes.workspace} />} />
                    <Route path={routes.workspaceSubjectId} element={<Subject />}>
                        <Route path={routes.workspaceSubjectActivities} element={<h1>Activities</h1>} />
                        <Route path={routes.workspaceSubjectConversation} element={<h1>Conversation</h1>} />
                        <Route path={routes.workspaceSubjectAttendance} element={<h1>Attendance</h1>} />
                        <Route path={routes.workspaceSubjectUsers} element={<h1>Users</h1>} />
                        <Route path={routes.workspaceSubjectSettings} element={<h1>Settings</h1>} />
                    </Route>


                    <Route path={routes.workspaceSettings} element={<h1>Settings</h1>}>

                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default RootRouter;