import { Fragment } from 'react';
import classNames from 'classnames';
import {
  generatePath,
  NavLink,
  Outlet,
  useParams,
  useLocation
} from 'react-router-dom';

import routes from '../../../constants/routes';

function Subject() {
  const { subjectId } = useParams();
  const { pathname } = useLocation();

  const renderNavigation = () => {
    let itemClassNames = ({ isActive }) => classNames(
      "main-navigation__item",
      isActive && "item-active"
    );

    return (
      <div className="main-navigation">
        <h1 className="main-navigation__title">{subjectId}</h1>
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
    let splittedPathname = pathname.split('/');
    let currentLocation = splittedPathname[splittedPathname.length - 1];
    
    return (
      <Fragment>
        {renderNavigation()}
        <div className="main-content__spacing"></div>
        <div className="main-content__body" style={{
          overflowY: currentLocation === 'conversation' && 'hidden'
        }}>
          <Outlet />
        </div>
      </Fragment>
    );
  };

  return render();
}

export default Subject;