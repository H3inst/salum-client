import classNames from 'classnames';
import { generatePath, NavLink } from 'react-router-dom';
import routes from '../../../constants/routes';

function Sidebar() {

  const testData = [
    {
      subject_id: 'o92F92gVs2',
      subject_name: 'Math'
    },
    {
      subject_id: '2foVis35kL',
      subject_name: 'Economy'
    },
    {
      subject_id: 'g3lfaAf3kf',
      subject_name: 'Basic science'
    },
    {
      subject_id: 'oP3kSmv94f2',
      subject_name: 'Philosophy'
    },
  ];

  const render = () => {
    return (
      <div className="workspace-sidebar">
        <h1 className="workspace-sidebar__logo">toopin <span>Salum</span></h1>
        <div className="divider mb-10 mt-10"></div>
        <div className="workspace-sidebar__header">
          <img src="https://miro.medium.com/max/785/0*8or0oFmHDRKnlETg" alt="" className="workspace-sidebar__header-avatar" />
          <p className="workspace-sidebar__header-name">Yesid Manjarres</p>
          <p className="typography typography__subtitle mt-5">Professor</p>
        </div>
        <div className="divider mb-10 mt-10"></div>
        <div className="workspace-sidebar__list">
          <h1 className="typography fw-bold pl-10 mb-10">Workspace</h1>
          <NavLink
            to={"calendar"}
            className={({ isActive }) => classNames(
              "workspace-sidebar__list-item",
              isActive && "list-item__active"
            )}
          >
            <span className="material-symbols-sharp mr-10">
              calendar_month
            </span>
            Calendar
          </NavLink>
          <NavLink
            to={"notes"}
            className={({ isActive }) => classNames(
              "workspace-sidebar__list-item",
              isActive && "list-item__active"
            )}
          >
            <span className="material-symbols-sharp mr-10">
              checklist
            </span>
            Notes
          </NavLink>
          <NavLink
            to={"scores"}
            className={({ isActive }) => classNames(
              "workspace-sidebar__list-item",
              isActive && "list-item__active"
            )}
          >
            <span className="material-symbols-sharp mr-10">
              rate_review
            </span>
            Scores
          </NavLink>
          {/* <button className="button button__primary w-100 mb-10">
            Create subject
          </button> */}
          <div className="divider mb-10 mt-10"></div>
          <div className="flex justify-between align-center mb-10 pl-10">
            <h1 className="typography fw-bold">Subjects</h1>
            <div className="icon-button">
              <span className="material-symbols-sharp">
                add
              </span>
            </div>
          </div>
          {testData.map((subject) => (
            <NavLink
              key={subject.subject_id}
              to={generatePath(routes.workspaceSubjectId, {
                subjectId: subject.subject_id
              })}
              className={({ isActive }) => classNames(
                "workspace-sidebar__list-item",
                isActive && "list-item__active"
              )}
            >
              <div className="circle mr-20" style={{ backgroundColor: '#aaa' }}></div>
              {subject.subject_name}
            </NavLink>
          ))}
        </div>
      </div>
    );
  };

  return render();
}

export default Sidebar;