import { Fragment } from 'react';
import classNames from 'classnames';
// import { useDispatch } from 'react-redux';
import { generatePath, NavLink, Outlet, useNavigate, useParams } from 'react-router-dom';

import routes from '../../../constants/routes';
import { useEffect } from 'react';

function Subject() {
    const { subjectId } = useParams();
    const navigate = useNavigate();
    // const dispatch = useDispatch();

    useEffect(() => {
        if (subjectId) {
            navigate(generatePath(routes.workspaceSubjectActivities, {
                subjectId
            }));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [subjectId]);

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
                <div className="pl-50 pr-50 pt-20">
                    <Outlet />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                </div>
            </Fragment>
        );
    };

    return render();
}

export default Subject;