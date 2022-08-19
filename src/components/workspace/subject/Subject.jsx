import { Fragment } from 'react';
import classNames from 'classnames';
import {
    generatePath,
    NavLink,
    Outlet,
    useParams
} from 'react-router-dom';

import routes from '../../../constants/routes';

function Subject() {
    const { subjectId } = useParams();

    const renderNavigation = () => {
        let itemClassNames = ({ isActive }) => classNames(
            "main-navigation__item",
            isActive && "item-active"
        );

        return (
            <div className="main-navigation">
                <NavLink
                    className={itemClassNames}
                    to={generatePath(
                        routes.workspaceSubjectActivities,
                        { subjectId }
                    )}
                >
                    Activities
                </NavLink>
                <NavLink
                    className={itemClassNames}
                    to={generatePath(
                        routes.workspaceSubjectConversation,
                        { subjectId }
                    )}
                >
                    Conversation
                </NavLink>
                <NavLink
                    className={itemClassNames}
                    to={generatePath(
                        routes.workspaceSubjectAttendance,
                        { subjectId }
                    )}
                >
                    Attendance
                </NavLink>
                <NavLink
                    className={itemClassNames}
                    to={generatePath(
                        routes.workspaceSubjectUsers,
                        { subjectId }
                    )}
                >
                    Users
                </NavLink>
                <NavLink
                    className={itemClassNames}
                    to={generatePath(
                        routes.workspaceSubjectSettings,
                        { subjectId }
                    )}
                >
                    Settings
                </NavLink>
            </div>
        );
    };

    const render = () => {
        return (
            <Fragment>
                <h1 className="main-content__header">{subjectId}</h1>
                {renderNavigation()}
                <div className="main-content__body">
                    <Outlet />
                </div>
            </Fragment>
        );
    };

    return render();
}

export default Subject;